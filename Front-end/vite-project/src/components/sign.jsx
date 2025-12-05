import styles from '../styles/Sign.module.css'

function Sign() {
    let style = { width: "100%", height: "100dvh", justifyContent: "center", alignItems: "center"}

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Cadastro</h1>
            </div>
        </div>
    )
}

export default Sign