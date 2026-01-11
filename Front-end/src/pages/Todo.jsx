import styles from '../styles/Todo.module.css'
import api from '../services/Api.js'
import { useEffect, useRef, useState } from 'react'
import { ListTodo } from 'lucide-react';
import Task from '../components/task.jsx';
import TaskInput from '../components/Taskinput.jsx';
import TaskStatus from '../components/Taskstatus.jsx';

export default function Todo() {
    const [tasks, setTasks] = useState([])
    const [isLight, setLight] = useState(localStorage.getItem('theme') === 'light')

    const titleRef = useRef()

    const userId = localStorage.getItem('userId')

    const createTask = async (event) => {
        event.preventDefault()

        try {
            await api.post('/tasks', {
                title: titleRef.current.value,
                userId: userId
            })

            titleRef.current.value = ''
        } catch (error) {
            alert('Erro ao cadastrar: ' + error)
        }
    }

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

    useEffect(() => {
        if (isLight) {
            localStorage.setItem('theme', 'light')
            document.body.classList.add('light')
        } else {
            localStorage.setItem('theme', 'dark')
            document.body.classList.remove('light')
        }
    }, [isLight])

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <ListTodo className={styles.clipboard} />
                    <h1>Minhas Tarefas</h1>
                </div>
                <TaskStatus />
                <TaskInput createTask={createTask} titleRef={titleRef} isLight={isLight} setLight={setLight} />
                <div className={styles.taskList}>
                    {tasks.map(task => {
                        return (
                            <Task id={task.id} completed={task.completed} title={task.title} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}