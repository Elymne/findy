"use client"

import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Card from "@src/presentation/components/card/card"
import { JobCategEnum } from "@src/domain/enums/jobOfferCategory"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import useSample from "@src/domain/hooks/uses/useSample"

export default function ExplorationSection(): JSX.Element {
    const { init, getState, updateCateg } = useSample()

    useEffect(() => {
        initState()
    }, [])

    async function initState(): Promise<void> {
        await init(JobCategEnum.Marketing)
    }

    function onCategClick(category: JobCategEnum): void {
        updateCateg(category)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, category: JobCategEnum): void {
        if (keyBoardEvent.code === "Enter") {
            updateCateg(category)
        }
    }

    return getState({
        onLoading: () => {
            return <LoadingBloc value="Chargement du contenu" styleMode={LoadingContentStyleMode.ligth} />
        },
        onFailure: () => {
            return <ErrorBloc value="Oups, une erreur s'est produite :(" styleMode={ErrorContentStyleMode.ligth} />
        },
        onSuccess: (state) => {
            return (
                <section id={styles.main}>
                    <div id={styles.content_bloc}>
                        <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                        <h2>Filtrez selon votre domaine</h2>
                        <ol>
                            {categories.map((categ) => {
                                return (
                                    <li
                                        onClick={() => onCategClick(categ)}
                                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, categ)}
                                        className={state.selectedCateg === categ ? styles.selected : undefined}
                                        tabIndex={0}
                                        key={uuidv4()}
                                    >
                                        {getCategoryName(categ)}
                                    </li>
                                )
                            })}
                        </ol>
                        <ul>
                            {state.value?.map((jobOffer) => {
                                return <li key={jobOffer.id ?? uuidv4()}>{<Card jobOffer={jobOffer} />}</li>
                            })}
                        </ul>
                    </div>
                </section>
            )
        },
    })
}

const categories = [
    JobCategEnum.Marketing,
    JobCategEnum.Communication,
    JobCategEnum.Comptability,
    JobCategEnum.HumanResources,
    JobCategEnum.WebDevelop,
    JobCategEnum.Commercial,
]

function getCategoryName(category: JobCategEnum): string {
    switch (category) {
        case JobCategEnum.Marketing:
            return "Marketing"
        case JobCategEnum.Communication:
            return "Communication"
        case JobCategEnum.Comptability:
            return "Comptabilité"
        case JobCategEnum.HumanResources:
            return "Ressources Humaines"
        case JobCategEnum.WebDevelop:
            return "Développement Web"
        case JobCategEnum.Commercial:
            return "Commercial"
    }
}
