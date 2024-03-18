"use client"
import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import { useFutureGetJobOffersFromSample } from "@src/domain/hooks/useFutureFetchSample"
import { useSelectCategory } from "@src/domain/hooks/useSelectCategory"
import { JobOfferCategory } from "@src/domain/hooks/enums/jobOfferCategory.enum"
import { v4 as uuidv4 } from "uuid"
import Card from "@src/presentation/components/card/card"

const ExplorationSection = (): JSX.Element => {
    const { selectedCategory, setSelectedCategory, getCategories, getCategoryName } = useSelectCategory()
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
                    {getCategories().map((categ) => {
                        return (
                            <li
                                onClick={() => onCategClick(categ)}
                                onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, categ)}
                                className={selectedCategory === categ ? styles.selected : undefined}
                                tabIndex={0}
                                key={uuidv4()}
                            >
                                {getCategoryName(categ)}
                            </li>
                        )
                    })}
                </ol>

                {getJobOffers({
                    onLoading: () => {
                        return <h1>Chargement…</h1>
                    },
                    onSuccess: (jobOffers) => {
                        if (jobOffers.length === 0) {
                            return <h1>Aucune donnée trouvée</h1>
                        }
                        return (
                            <ul>
                                {jobOffers!.map((jobOffer) => {
                                    return (
                                        <li key={jobOffer.id ?? uuidv4()}>
                                            <Card jobOffer={jobOffer} />
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    },
                    onFailure: (err) => {
                        return <h1>Une erreur s'est produite :(</h1>
                    },
                })}
            </div>
        </section>
    )
}

export default ExplorationSection
