import styles from "../styles/Todo.module.css"

export default function TaskStatus({ tasks }) {
    const concludedTasks = tasks.filter(task => task.completed).length
    const pendingTasks = tasks.filter(task => !task.completed).length

    return (
        <div className={styles.taskStatusContainer}>
            <div className={styles.taskStatus}>
                <div className={`${styles.taskCount} ${styles.taskStatusDiv}`}><p className={styles.statusText}><b>{tasks.length}</b> tarefas</p></div>
                <div className={`${styles.concludedTasks} ${styles.taskStatusDiv}`}><p className={styles.statusText}><b>{concludedTasks}</b> concluídas</p></div>
                <div className={`${styles.pendingTasks} ${styles.taskStatusDiv}`}><p className={styles.statusText}><b>{pendingTasks}</b> pendentes</p></div>
            </div>
        </div>
    )
}