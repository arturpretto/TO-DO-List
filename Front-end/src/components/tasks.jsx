import styles from '../styles/Tasks.module.css'
import api from '../services/api.js'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Hourglass, Trash2 } from 'lucide-react';

export default function Tasks() {
    const [tasks, setTasks] = useState([])

    const titleRef = useRef()
    const dateRef = useRef()
    const complete = useRef()

    const userId = localStorage.getItem('userId')

    const navigate = useNavigate()

    useEffect(() => {
        async function LoadTasks() {
            const response = await api.get('/tasks', {
                headers: {
                    Authorization: userId
                }
            })

            setTasks(response.data)
        }

        if (userId) {
            LoadTasks()
        }
    })

    async function createTask(event) {
        event.preventDefault()

        try {
            await api.post('/tasks', {
                title: titleRef.current.value,
                date: dateRef.current.value,
                userId: userId
            })

            titleRef.current.value = ''
            dateRef.current.value = ''
        } catch (error) {
            alert('Erro ao cadastrar: ' + error)
        }
    }

    async function completeTask(taskId, taskCompleted) {
        try {
            await api.put('/tasks', {
                id: taskId,
                completed: taskCompleted
            })
        } catch (error) {
            alert('Erro ao atualizar a tarefa: ' + error)
        }
    }

    async function deleteTask(taskId) {
        try {
            await api.delete('/tasks', {
                data: {
                    id: taskId
                }
            })
        } catch (error) {
            alert('Erro ao deletar a tarefa: ' + error)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form onSubmit={createTask} className={styles.form}>
                    <input type='text' placeholder='Insira uma nova tarefa...' ref={titleRef} className={styles.taskInput} /><input type='datetime-local' ref={dateRef} /><button type='submit'>ADICIONAR</button>
                </form>
                <div className={styles.taskList}>
                    {tasks.map(task => {
                        const date = new Date(task.date)

                        const formatDate = date.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit'
                        })

                        const formatTime = date.toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })

                        return (
                            <div key={task.id} className={styles.task}>
                                <input checked={task.completed} onChange={() => completeTask(task.id, !task.completed)} type='checkbox' className={styles.completed} />
                                <span className={styles.span}>
                                    {task.completed ? <Check className={styles.spanIcon} /> : <Hourglass className={styles.spanIcon} />}
                                </span>
                                <div>
                                    {task.title}
                                </div>
                                <div>
                                    {formatDate} | {formatTime}
                                </div>
                                <span onClick={() => deleteTask(task.id)} className={styles.span}>
                                    <Trash2 className={styles.spanIcon} />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}