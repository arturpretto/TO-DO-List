import styles from '../styles/Auth.module.css'
import { Link } from 'react-router-dom'

export default function Auth() {
    return (
        <div className={styles.main}>
            <div className={styles.auth}>
                <Link to='/login' className={styles.btn}><button className={styles.btn}>ENTRAR</button></Link>
                <Link to='/signup' className={styles.btn}><button className={styles.btn}>CADASTRAR-SE</button></Link>
            </div>
        </div>
    )
}