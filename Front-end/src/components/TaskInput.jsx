import styles from "../styles/Todo.module.css"
import { Link } from 'react-router-dom'
import { Plus, LogOut, Sun } from "lucide-react"

export default function TaskInput({ createTask, titleRef, isLight, setLight }) {
    return (
        <form onSubmit={createTask} className={styles.taskForm}>
            <input type='text' placeholder='INSIRA UMA NOVA TAREFA...' ref={titleRef} className={styles.taskInput} />
            <button type='submit' className={styles.addButton}><Plus />Adicionar</button>

            <Sun onClick={() => setLight(!isLight)} className={styles.colorMode} />
            <Link to='/'><LogOut className={styles.logOut} /></Link>
        </form>
    )
}