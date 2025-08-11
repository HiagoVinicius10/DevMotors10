'use client'

import styles from "./error.module.scss"
import Link from "next/link"


export default function Error (){

    return(
        <main className={styles.main}>
            <h1 className={styles.title}>Ops página não existente 404! </h1>

            <Link href="/" className={styles.link}>
                Voltar para Home
            </Link>
        </main>
    )
}