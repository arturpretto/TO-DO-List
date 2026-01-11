import { Trash2, CircleCheckBig, Circle } from "lucide-react"
import styles from "../styles/Todo.module.css"
import api from "../services/Api"

export default function Task({ id, completed, title}) {
    const completeTask = async (taskId, completed) => {
        try {
            await api.put('/tasks', {
                id: taskId,
                completed: completed
            })
        } catch (error) {
            alert('Erro ao atualizar a tarefa: ' + error)
        }
    }

    const deleteTask = async (taskId) => {
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
        <div key={id} className={styles.task}>
            <span className={styles.spanContainer} role='button' onClick={() => completeTask(id, !completed)}>
                {completed ? <CircleCheckBig className={styles.checkedButton} />
                    : <Circle className={styles.checkButton} />}
            </span>
            <div className={styles.titleContainer}>
                <p className={completed ? styles.taskTitle : ''}>{title}</p>
            </div>
            <span onClick={() => deleteTask(id)} className={styles.binContainer}>
                <Trash2 className={styles.binButton} />
            </span>
        </div>
    )
}