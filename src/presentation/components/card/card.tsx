import { JobOffer } from "@src/domain/entities/jobOffer/jobOffer.entity"
import styles from "./card.module.css"
import Image from "next/image"

export default function Card({ jobOffer }: { jobOffer: JobOffer }): JSX.Element {
    return (
        <article id={styles.card} tabIndex={0}>
            <Image
                src={jobOffer.image_url ?? "/images/placeholder.png"}
                height={100}
                width={260}
                alt="Toolbox icon"
                style={{}}
                className={styles.top_image}
            />

            <Image
                src={jobOffer.company_logo_url ?? "/images/logo_placeholder.png"}
                height={60}
                width={60}
                alt="Toolbox icon"
                style={{}}
                className={styles.logo}
            />

            <h1>{jobOffer.company_name}</h1>

            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/badge.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {jobOffer.title}
            </h2>

            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/localisation.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {jobOffer.city_name}
            </h2>

            <h2>
                <span>
                    <Image className={styles.icon} src="/svg/date.svg" height={20} width={20} alt="Toolbox icon" />
                </span>
                {jobOffer.created_while}
            </h2>
        </article>
    )
}
