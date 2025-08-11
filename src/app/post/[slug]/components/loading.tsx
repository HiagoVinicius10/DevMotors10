import styles from "./loading.module.scss"

export function LoadingPage(){


    return(
        <div className={styles.container}>
            <h1 className={styles.title}> Carregando... </h1> 
        </div>
    )
}