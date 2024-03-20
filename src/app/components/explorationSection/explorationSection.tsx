import styles from "./explorationSection.module.css"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Card from "@src/presentation/components/card/card"
import { JobOfferCategory } from "@src/domain/entities/enums/jobOfferCategory"
import useExplorationState from "./useExplorationSectionState"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"

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
    JobOfferCategory.Marketing,
    JobOfferCategory.Communication,
    JobOfferCategory.Comptability,
    JobOfferCategory.HumanResources,
    JobOfferCategory.WebDevelop,
    JobOfferCategory.Commercial,
]

function getCategoryName(category: JobOfferCategory): string {
    switch (category) {
        case JobOfferCategory.Marketing:
            return "Marketing"
        case JobOfferCategory.Communication:
            return "Communication"
        case JobOfferCategory.Comptability:
            return "Comptabilité"
        case JobOfferCategory.HumanResources:
            return "Ressources Humaines"
        case JobOfferCategory.WebDevelop:
            return "Développement Web"
        case JobOfferCategory.Commercial:
            return "Commercial"
    }
}
