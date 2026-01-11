import styles from '../styles/Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Loader2, Check } from 'lucide-react'
import api from '../services/Api.js'

export default function Signup() {
    const [isLoading, setLoading] = useState(false)
    const [showMessage, setMessage] = useState(false)
    const [isVisible, setVisible] = useState(false)

    const nameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()

    const navigate = useNavigate()

    async function Handler(event) {
        event.preventDefault()

        const credentialsCheck = document.getElementById('credentialsCheck')

        const validateEmail = (email) => {
            const regex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/

            if (!regex.test(email)) { return false }
            if (email.includes('..')) { return false }

            return true
        }

        const validEmail = validateEmail(emailRef.current.value)

        if (validEmail) {
            setLoading(true)

            try {
                const { data: user } = await api.get('/auth/user', {
                    params: {
                        email: emailRef.current.value
                    }
                })

                if (user) {
                    credentialsCheck.textContent = 'E-mail já utilizado'
                    setLoading(false)
                    setVisible(true)
                    return
                } else if (nameRef.current.value && emailRef.current.value && passwordRef.current.value) {
                    await api.post('/auth/sign', {
                        name: nameRef.current.value,
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                    })

                    setTimeout(() => {
                        setLoading(false)
                        setMessage(true)
                    }, 800)

                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                } else {
                    credentialsCheck.textContent = 'Insira nome, e-mail e senha'
                    setLoading(false)
                    setVisible(true)
                    return
                }
            } catch (error) {

                if (nameRef.current.value && emailRef.current.value && passwordRef.current.value) {
                    credentialsCheck.textContent = 'Erro com o servidor, tente novamente mais tarde'
                } else {
                    credentialsCheck.textContent = 'Insira nome, e-mail e senha'
                }

                setTimeout(() => {
                    setLoading(false)
                    setVisible(true)
                }, 1000)
            }

        } else if (emailRef.current.value && passwordRef.current.value && nameRef.current.value) {
            credentialsCheck.textContent = 'Formato de e-mail não permitido'

            setLoading(false)
            setVisible(true)
        } else {
            credentialsCheck.textContent = 'Insira nome, e-mail e senha'

            setLoading(false)
            setVisible(true)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.authForm}>
                    <h1>CADASTRO</h1>
                    <form className={styles.authForm} onSubmit={Handler}>
                        <input type='text' placeholder='Name...' ref={nameRef} className={styles.input} />
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
                            ) : 'CADASTRAR-SE'}
                        </button>

                        <h3>Já tem uma conta? <Link to='/'>ENTRAR</Link></h3>
                    </form>
                </div>
            </div>
        </div>
    )
}