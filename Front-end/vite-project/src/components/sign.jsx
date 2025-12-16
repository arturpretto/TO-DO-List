import styles from '../styles/Auth.module.css'
import { Link } from 'react-router-dom'
import api from '../../services/app.js'
import { useRef } from 'react'

function Signup() {
    const nameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()

    async function Handler(event) {
        event.preventDefault()

        try {
            await api.post('/users', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })

            alert('Usuário cadastrado')
        } catch (error) {
            alert('Erro ao cadastrar: ' + error)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <h1>CADASTRO</h1>
                    <form className={styles.form}>
                        <input type='text' placeholder='Name' ref={nameRef}></input>
                        <input type='text' placeholder='E-mail' ref={emailRef}></input>
                        <input type='password' placeholder='Password' ref={passwordRef}></input>
                        <button>CADASTRAR-SE</button>

                        <h3>Já tem uma conta? <Link to='/login'><a>ENTRAR</a></Link></h3>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup