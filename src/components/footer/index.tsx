import { HomeProps } from "@/utils/home.type"
import styles from "./styles.module.scss"
import { Mail, MapPin, Clock, Phone } from "lucide-react"

export function Footer({object}: HomeProps){


    return(
        <footer className={styles.footer} id="contatos">
            <section className={styles.section} >
                <h1 className={styles.title}> Contatos </h1>
                
                <div className={styles.content}>

                    <article className={styles.item}>
                            <Mail size={28} color="#fff"/>
                            <div   className={styles.info}>
                               <strong> Email</strong> 
                               <p>
                                 { object.metadata.contact.email} 
                               </p>
                            </div>
                    </article>

                    <article className={styles.item}>
                            <Phone size={28} color="#fff"/>
                            <div   className={styles.info}>
                               <strong> Telefone </strong> 
                               <p>
                                 { object.metadata.contact.phone} 
                               </p>
                            </div>
                    </article>

                    <article className={styles.item}>
                            <Clock size={28} color="#fff"/>
                            <div   className={styles.info}>
                               <strong> Horário de funcionamento </strong> 
                               <p>
                                 { object.metadata.contact.time} 
                               </p>
                            </div>
                    </article>

                    <article className={styles.item}>
                            <MapPin size={28} color="#fff"/>
                            <div   className={styles.info}>
                               <strong> Endereço </strong> 
                               <p>
                                 { object.metadata.contact.address} 
                               </p>
                            </div>
                    </article>

                </div>
            </section>

            <a 
            className={styles.btnInfo}
            target="_blank"
            href={object.metadata.cta_button.url}>
            <Phone size={28} color="#fff"/>
            {object.metadata.cta_button.title}
            </a>

            <p className={styles.compyText}>
                Todos direitos reservados {object.title} @{`${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}