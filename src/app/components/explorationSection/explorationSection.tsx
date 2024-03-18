"use client"
import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { useExplorationState } from "@src/app/components/explorationSection/useExplorationSectionState"
import { categories, getCategoryName } from "./explorationSectionConst"
import Card from "@src/presentation/components/card/card"
import { JobOfferCategory } from "@src/domain/entities/enums/jobOfferCategory"

export default function ExplorationSection(): JSX.Element {
    const { init, getState, changeCategory } = useExplorationState()

    useEffect(() => {
        initState()
    }, [])

    async function initState(): Promise<void> {
        await init()
        changeCategory(JobOfferCategory.Marketing)
    }

    function onCategClick(category: JobOfferCategory): void {
        changeCategory(category)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, category: JobOfferCategory): void {
        if (keyBoardEvent.code === "Enter") {
            changeCategory(category)
        }
    }

    return getState({
        onLoading: () => {
            return (
                <section id={styles.main}>
                    <div id={styles.content}>
                        <h1>Chargement du contenu</h1>
                    </div>
                </section>
            )
        },
        onSuccess: (state) => {
            return (
                <section id={styles.main}>
                    <div id={styles.content}>
                        <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                        <h2>Filtrez selon votre domaine</h2>
                        <ol>
                            {categories.map((categ) => {
                                return (
                                    <li
                                        onClick={() => onCategClick(categ)}
                                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, categ)}
                                        className={state.selectedCategory === categ ? styles.selected : undefined}
                                        tabIndex={0}
                                        key={uuidv4()}
                                    >
                                        {getCategoryName(categ)}
                                    </li>
                                )
                            })}
                        </ol>
                        <ul>
                            {state.jobOffers?.map((jobOffer) => {
                                return (
                                    <li key={jobOffer.id ?? uuidv4()}>
                                        <Card jobOffer={jobOffer} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            )
        },
        onFailure: () => {
            return (
                <section id={styles.main}>
                    <div id={styles.content}>
                        <h1>Oups, une erreur s'est produite :(</h1>
                    </div>
                </section>
            )
        },
    })
}
