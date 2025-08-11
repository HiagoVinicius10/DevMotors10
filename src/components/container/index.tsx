import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface ContainerProp{
    children: ReactNode;
}

export function Container({children}: ContainerProp ){

    return(
        <main className={styles.main}>
            { children }
        </main>
    )
}