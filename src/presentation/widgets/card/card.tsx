import { JobOffer } from "@src/domain/entities/jobOffer"
import styles from "./card.module.css"
import Image from "next/image"

const Card = (p: { jobOffer: JobOffer }) => {
    return (
        <article id={styles.card}>
            <Image src="/images/placeholder.jpg" height={120} width={300} alt="Toolbox icon" style={{}} className={styles.top_image} />
            <Image src="/images/logo_placeholder.png" height={100} width={100} alt="Toolbox icon" style={{}} className={styles.logo} />
            <h1>{p.jobOffer.company_name}</h1>
            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/badge.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {p.jobOffer.title}
            </h2>
            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/localisation.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {p.jobOffer.city_name}
            </h2>
            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/date.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {p.jobOffer.created_while}
            </h2>
        </article>
    )
}

export default Card
