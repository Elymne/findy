"use client"
import Card from "@src/presentation/widgets/card/card"
import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import { useFutureGetJobOffersFromSample } from "@src/domain/hooks/useFutureFetchSample"
import { useSelectCategory } from "@src/domain/hooks/useSelectCategory"
import { JobOfferCategory } from "@src/domain/hooks/enums/jobOfferCategory.enum"

const ExplorationSection = (): JSX.Element => {
    const { selectedCategory, setSelectedCategory } = useSelectCategory()
    const { fetchSample, selectJobOffersFromCategory, getJobOffers } = useFutureGetJobOffersFromSample()

    function onCategClick(category: JobOfferCategory): void {
        setSelectedCategory(category)
        selectJobOffersFromCategory(category)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, category: JobOfferCategory): void {
        if (keyBoardEvent.code === "Enter") {
            setSelectedCategory(category)
            selectJobOffersFromCategory(category)
        }
    }

    useEffect(() => {
        fetchSample().then(() => {
            setSelectedCategory(JobOfferCategory.Marketing)
            selectJobOffersFromCategory(JobOfferCategory.Marketing)
        })
    }, [])

    return (
        <section id={styles.main}>
            <div id={styles.content}>
                <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>
                <ol>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.Marketing)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.Marketing)}
                        className={selectedCategory === JobOfferCategory.Marketing ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Marketing
                    </li>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.Communication)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.Communication)}
                        className={selectedCategory === JobOfferCategory.Communication ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Communication
                    </li>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.Comptability)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.Comptability)}
                        className={selectedCategory === JobOfferCategory.Comptability ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Comptabilité
                    </li>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.WebDevelop)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.WebDevelop)}
                        className={selectedCategory === JobOfferCategory.WebDevelop ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Dévelopement Web
                    </li>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.HumanResources)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.HumanResources)}
                        className={selectedCategory === JobOfferCategory.HumanResources ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        RH
                    </li>
                    <li
                        onClick={() => onCategClick(JobOfferCategory.Commercial)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, JobOfferCategory.Commercial)}
                        className={selectedCategory === JobOfferCategory.Commercial ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Commercial
                    </li>
                </ol>

                {getJobOffers({
                    onLoading: () => {
                        return <h1>Loading</h1>
                    },
                    onSuccess: (jobOffers) => {
                        if (jobOffers.length === 0) {
                            return <h1>Nothing to display here</h1>
                        }
                        return (
                            <ul>
                                {jobOffers!.map((jobOffer) => {
                                    return (
                                        <li key={jobOffer.id}>
                                            <Card jobOffer={jobOffer} />
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    },
                    onFailure: (err) => {
                        return <h1>An error occured</h1>
                    },
                })}
            </div>
        </section>
    )
}

export default ExplorationSection
