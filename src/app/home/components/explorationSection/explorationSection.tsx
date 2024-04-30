"use client"

import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import Card from "@src/components/card/card"
import LoadingBloc, { LoadingContentStyleMode } from "@src/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/components/errorBloc/errorBloc"
import useJobOffersSample from "@src/app/home/components/explorationSection/useJobOffersSample"
import { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import JobCategory from "@src/domain/enums/jobOfferCategory"

export default function ExplorationSection(): JSX.Element {
    const { currentCategory, currentJobOffers, getState, setCurrentCategory } = useJobOffersSample(JobOfferDatasourceImpl)

    useEffect(() => {
        setCurrentCategory(JobCategory.Marketing)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function onCategClick(category: JobCategory): void {
        setCurrentCategory(category)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, category: JobCategory): void {
        if (keyBoardEvent.code === "Enter") {
            setCurrentCategory(category)
        }
    }

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <h1>Explorez nos offres d&apos;alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>

                {getState({
                    onLoading() {
                        return (
                            <ol>
                                {categories.map((category, index) => {
                                    return (
                                        <li className={styles.freezed} tabIndex={0} key={index}>
                                            {getCategoryName(category)}
                                        </li>
                                    )
                                })}
                            </ol>
                        )
                    },
                    onSuccess() {
                        return (
                            <ol>
                                {categories.map((category, index) => {
                                    return (
                                        <li
                                            onClick={() => onCategClick(category)}
                                            onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, category)}
                                            className={category === currentCategory ? styles.selected : ""}
                                            tabIndex={0}
                                            key={index}
                                        >
                                            {getCategoryName(category)}
                                        </li>
                                    )
                                })}
                            </ol>
                        )
                    },
                    onFailure() {
                        // TODO Ajouter un bouton pour relancer le chargement ?
                        return <></>
                    },
                })}

                {getState({
                    onLoading: () => {
                        return (
                            <ul>
                                <li key={"loading"}>
                                    <LoadingBloc value="Chargement du contenu…" styleMode={LoadingContentStyleMode.ligth} />
                                </li>
                            </ul>
                        )
                    },
                    onSuccess: () => {
                        return (
                            <ul>
                                {currentJobOffers.map((jobOffer, index) => {
                                    return <li key={index}>{<Card jobOffer={jobOffer} />}</li>
                                })}
                            </ul>
                        )
                    },
                    onFailure: () => {
                        return (
                            <ul>
                                <li key={"error"}>
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

// TODO : Do something with this.
const categories = [
    JobCategory.Marketing,
    JobCategory.Communication,
    JobCategory.Comptability,
    JobCategory.HumanResources,
    JobCategory.WebDevelop,
    JobCategory.Commercial,
]

function getCategoryName(category: JobCategory): string {
    switch (category) {
        case JobCategory.Marketing:
            return "Marketing"
        case JobCategory.Communication:
            return "Communication"
        case JobCategory.Comptability:
            return "Comptabilité"
        case JobCategory.HumanResources:
            return "Ressources Humaines"
        case JobCategory.WebDevelop:
            return "Développement Web"
        case JobCategory.Commercial:
            return "Commercial"
    }
}
