import styles from '../styles/Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Loader2, Check } from 'lucide-react'
import api from '../services/Api.js'

export default function Login() {
    const [isLoading, setLoading] = useState(false)
    const [showMessage, setMessage] = useState(false)
    const [isVisible, setVisible] = useState(false)

    const passwordRef = useRef()
    const emailRef = useRef()

    const navigate = useNavigate()

    const handler = async (event) => {
        event.preventDefault()

        const credentialsCheck = document.getElementById('credentialsCheck')

        try {
            setLoading(true)

            if (emailRef.current.value && passwordRef.current.value) {
                const { data } = await api.post('/auth/login', {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
                localStorage.setItem('userId', data)
            } else {
                credentialsCheck.textContent = 'Insira e-mail e senha'
                setLoading(false)
                setVisible(true)
                return
            }
            setTimeout(() => {
                setLoading(false)
                setMessage(true)
            }, 800)

            setTimeout(() => {
                navigate('/tasks')
            }, 2000)
        } catch (error) {
            setTimeout(() => {
                credentialsCheck.textContent = 'E-mail ou senha incorretos'
                setLoading(false)
                setVisible(true)
            }, 1000)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.authForm}>
                    <h1>LOG IN</h1>
                    <form className={styles.authForm} onSubmit={handler}>
                        <input type='text' placeholder='E-mail...' ref={emailRef} className={styles.input} />
                        <input type='password' placeholder='Password...' ref={passwordRef} className={styles.input} />
                        <div className={`${styles.credentialsError} ${isVisible ? styles.visible : styles.hidden}`}>
                            <p id='credentialsCheck'></p>
                        </div>
                        <button type='submit' className={styles.formButton}>
                            {showMessage ? (
                                <Check className={styles.spanCheck} />
                            ) : isLoading ? (
                                <Loader2 className={styles.spanLoading} />
                            ) : 'ENTRAR'}
                        </button>

                        <h3>Não tem uma conta? <Link to='/signup'>CADASTRAR-SE</Link></h3>
                    </form>
                </div>
            </div>
        </div>
    )
}