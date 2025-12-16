import styles from '../styles/Auth.module.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

function Login() {
    const passwordRef = useRef()
    const emailRef = useRef()

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1>LOG IN</h1>
                    <form className={styles.form}>
                        <input type='text' placeholder='E-mail' ref={emailRef}></input>
                        <input type='password' placeholder='Password' ref={passwordRef}></input>
                        <button>ENTRAR</button>

                        <h3>Não tem uma conta? <Link to='/signup'><a>CADASTRAR-SE</a></Link></h3>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login