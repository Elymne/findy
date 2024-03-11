"use client"
import Card from "@src/presentation/widgets/card/card"
import styles from "./explorationSection.module.css"
import { useState } from "react"

const ExplorationSection = () => {
    const [selectedCateg, setSelectedCateg] = useState<Category>(Category.Marketing)

    function onCategClick(categ: Category): void {
        setSelectedCateg(categ)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLLIElement>, categ: Category): void {
        if (keyBoardEvent.code === "Enter") {
            setSelectedCateg(categ)
        }
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
                        className={selectedCateg === Category.Marketing ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Marketing
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Communication)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Communication)}
                        className={selectedCateg === Category.Communication ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Communication
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Comptability)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Comptability)}
                        className={selectedCateg === Category.Comptability ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Comptabilité
                    </li>
                    <li
                        onClick={() => onCategClick(Category.WebDevelop)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.WebDevelop)}
                        className={selectedCateg === Category.WebDevelop ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Dévelopement Web
                    </li>
                    <li
                        onClick={() => onCategClick(Category.HumanResources)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.HumanResources)}
                        className={selectedCateg === Category.HumanResources ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        RH
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Commercial)}
                        onKeyDown={(keyBoardEvent) => onKeyDown(keyBoardEvent, Category.Commercial)}
                        className={selectedCateg === Category.Commercial ? styles.selected : undefined}
                        tabIndex={0}
                    >
                        Commercial
                    </li>
                </ol>

                <ul>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                    <li>
                        <Card />
                    </li>
                </ul>
            </div>
        </section>
    )
}

enum Category {
    Marketing,
    Communication,
    Comptability,
    WebDevelop,
    HumanResources,
    Commercial,
}

export default ExplorationSection
