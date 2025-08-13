import Image from "next/image"
import styles from "./styles.module.scss"
import { HomeProps } from "@/utils/home.type"

export default function About({object}: HomeProps){

    return(
        <>
            <section className={styles.container} id="services">
                <article className={styles.innerAbout}>
                    <h1 className={styles.title}> Sobre</h1>
                    <p className={styles.description}>
                       { object.metadata.about.description }
                    </p>
                </article>

                <article className={styles.banner}>
                    <Image
                    className={styles.img}
                        src={object.metadata.about.banner.url}
                        alt="Imagem ilustrativa sobre a empresa"
                        quality={100}
                        priority={true}
                        fill={true}
                    />
                </article>
            </section>

            <h2 className={styles.servicesTitle}>Conheça os nossos Serviços
            </h2> 

            <section className={styles.services}>
                {object.metadata.services.map((item) => (
                    <article key={item.description} className={styles.service}>
                  <div className={styles.innerServices}>
                        <Image
                        className={styles.imgServices}
                        src={item.image.url}
                        alt="Imagem dos serviços"
                        quality={100}
                        priority={true}
                        fill={true}
                        sizes="(max-width: 400px) 100vw, (max-width: 1024px) 75vw, 60vw"
                    />
                  </div>
                    <p> { item.description } </p>   
                    </article>
                ))}
            </section>
        </>
    )
}