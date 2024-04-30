import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import styles from "./card.module.css"
import Image from "next/image"

export default function Card({ jobOffer }: { jobOffer: JobOffer }): JSX.Element {
    // TODO : Hardcoder un onclick et on enter press pour ces éléments.
    return (
        <article id={styles.card}>
            <a href={jobOffer.sourceUrl} target="_blank" tabIndex={0}>
                <Image
                    src={jobOffer.imageUrl ?? "/images/placeholder.jpg"}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt="Image top."
                    style={{ width: "100%", height: "100px", borderRadius: "18px 18px 0px 0px", objectFit: "cover" }}
                />

                <Image
                    src={jobOffer.companyLogoUrl ?? "/images/logo_placeholder.png"}
                    placeholder="blur"
                    blurDataURL="/images/logo_placeholder.png"
                    height={60}
                    width={60}
                    alt="Toolbox icon"
                    className={styles.logo}
                />

                <div>
                    <h1>{jobOffer.title}</h1>
                    <h2 className={styles.company}>{jobOffer.companyName}</h2>

                    <h2>
                        <span>
                            <Image className={styles.icon} src="/svg/localisation.svg" height={20} width={20} alt="Toolbox icon" />
                        </span>
                        {jobOffer.cityName}
                    </h2>

                    <h2>
                        <span>
                            <Image className={styles.icon} src="/svg/date.svg" height={20} width={20} alt="Toolbox icon" />
                        </span>
                        {jobOffer.createdWhile}
                    </h2>
                </div>
            </a>
        </article>
    )
}
