"use client"
import Card from "@src/presentation/widgets/card/card"
import styles from "./explorationSection.module.css"
import { Category, useSelectCategory } from "./hooks/useSelectCategory.hook"
import { useGetJobOffers } from "./hooks/useGetJobOffers.hook"

const ExplorationSection = () => {
    const { selectedCategory, setSelectedCategory } = useSelectCategory(Category.Marketing)
    const { jobOffers, setJobOffers } = useGetJobOffers()

    function onCategClick(categ: Category): void {
        setSelectedCategory(categ)
        setJobOffers(categ)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, categ: Category): void {
        if (keyBoardEvent.code === "Enter") {
            setSelectedCategory(categ)
            setJobOffers(categ)
        }
    }

    function displayJobOffers(): JSX.Element {
        if (jobOffers === undefined || jobOffers === null) {
            return <h1>Loading</h1>
        }

        if (jobOffers!.length == 0) {
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
    }

    return (
        <section id={styles.main}>
            <div id={styles.content}>
                <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>
                <ol>
                    <li
                        onClick={() => onCategClick(Category.Marketing)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Marketing)}
                        className={selectedCategory === Category.Marketing ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Marketing
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Communication)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Communication)}
                        className={selectedCategory === Category.Communication ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Communication
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Comptability)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Comptability)}
                        className={selectedCategory === Category.Comptability ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Comptabilité
                    </li>
                    <li
                        onClick={() => onCategClick(Category.WebDevelop)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.WebDevelop)}
                        className={selectedCategory === Category.WebDevelop ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Dévelopement Web
                    </li>
                    <li
                        onClick={() => onCategClick(Category.HumanResources)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.HumanResources)}
                        className={selectedCategory === Category.HumanResources ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        RH
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Commercial)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Commercial)}
                        className={selectedCategory === Category.Commercial ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Commercial
                    </li>
                </ol>

                {displayJobOffers()}
            </div>
        </section>
    )
}

export default ExplorationSection
