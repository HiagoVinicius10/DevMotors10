import { getBySlug } from "@/utils/actions/get-data"
import { PostProp } from "@/utils/post.type"
import { Hero } from "@/components/hero"
import { Phone } from "lucide-react"
import { Container } from "@/components/container"
import Image from "next/image"
import styles from "./content.module.scss"



export async function Content ({slug}: {slug: string}){
    const {objects}: PostProp = await getBySlug(slug)

    return(
        <>
            <Hero
                heading={objects[0].title}
                buttonTitle={objects[0].metadata.button.title}
                buttonUrl={objects[0].metadata.button.url}
                bannerUrl={objects[0].metadata.banner.url}
                icon={<Phone size={20} color="#fff"/>}
             />

             <Container>
                    <section className={styles.about}>
                        
                        <article className={styles.innerAbout}>
                            <h1 className={styles.title}>
                                {objects[0].metadata.description.title}
                            </h1>
                            <p>
                                {objects[0].metadata.description.text}
                            </p>

                        {objects[0].metadata.description.button_active && (
                            <a
                            href={objects[0].metadata.description.button_url as string}
                            target="_blank"
                            className={styles.link}
                            >
                                {objects[0].metadata.description.button_title}
                            </a>
                        )}
                        </article>

                        <article className={styles.bannerAbout}>
                            <Image
                                className={styles.imageAbout}
                                alt={objects[0].metadata.description.title}
                                fill
                                quality={100}
                                priority={true}
                                src={objects[0].metadata.description.banner.url}
                                sizes="(max-width: 400px) 100vw, (max-width: 1024px) 75vw, 60vw"
                            />
                        </article>

                    </section>

                <p className={styles.compyText}>
                    Todos direitos reservados {objects[0].title} @{`${new Date().getFullYear()}`}
                </p>
             </Container>

        </>
    )
}