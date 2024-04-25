"use client"

import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import Card from "@src/presentation/components/card/card"
import { JobCategEnum } from "@src/domain/enums/jobOfferCategory"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import useSample from "@src/domain/hooks/uses/useSample"

export default function ExplorationSection(): JSX.Element {
    const { setCurrentCategory, getCurrentCategory, getState } = useSample()

    useEffect(() => {
        setCurrentCategory(JobCategEnum.Marketing)
    }, [])

    function onCategClick(category: JobCategEnum): void {
        setCurrentCategory(category)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, category: JobCategEnum): void {
        if (keyBoardEvent.code === "Enter") {
            setCurrentCategory(category)
        }
    }

    function getCategoryClassName(categ: JobCategEnum): string | undefined {
        if (getCurrentCategory() === null) {
            return styles.freezed
        }

        if (getCurrentCategory() === categ) {
            return styles.selected
        }
    }

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>

                <ol>
                    {categories.map((categ, index) => {
                        return (
                            <li
                                onClick={() => {
                                    if (getCurrentCategory() == null) {
                                        return
                                    }
                                    onCategClick(categ)
                                }}
                                onKeyDown={(keyBoardEvent) => {
                                    if (getCurrentCategory() == null) {
                                        return
                                    }
                                    onKeyDown(keyBoardEvent, categ)
                                }}
                                className={getCategoryClassName(categ)}
                                tabIndex={0}
                                key={index}
                            >
                                {getCategoryName(categ)}
                            </li>
                        )
                    })}
                </ol>

                {getState({
                    onLoading: () => {
                        return (
                            <ul>
                                <li key={"loading"}>
                                    <LoadingBloc value="Chargement du contenu" styleMode={LoadingContentStyleMode.ligth} />
                                </li>
                            </ul>
                        )
                    },
                    onSuccess: (state) => {
                        return (
                            <ul>
                                {state.value!.map((jobOffer, index) => {
                                    return <li key={index}>{<Card jobOffer={jobOffer} />}</li>
                                })}
                            </ul>
                        )
                    },
                    onFailure: () => {
                        return (
                            <ul>
                                <li key={"loading"}>
                                    <ErrorBloc value="Oups, une erreur s'est produite :(" styleMode={ErrorContentStyleMode.ligth} />
                                </li>
                            </ul>
                        )
                    },
                })}
            </div>
        </section>
    )
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
