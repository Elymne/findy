"use client"
import ExplorationCard from "@src/presentation/widgets/explorationCard/explorationCard"
import styles from "./explorationSection.module.css"
import { useState } from "react"

const ExplorationSection = () => {
    const [selectedCateg, setSelectedCateg] = useState<Category>(Category.Marketing)

    function onCategClick(categ: Category): void {
        setSelectedCateg(categ)
    }

    return (
        <section id={styles.main}>
            <div id={styles.content}>
                <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>

                <ol>
                    <li
                        onClick={() => onCategClick(Category.Marketing)}
                        className={selectedCateg === Category.Marketing ? styles.selected : undefined}
                    >
                        Marketing
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Communication)}
                        className={selectedCateg === Category.Communication ? styles.selected : undefined}
                    >
                        Communication
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Comptability)}
                        className={selectedCateg === Category.Comptability ? styles.selected : undefined}
                    >
                        Comptabilité
                    </li>
                    <li
                        onClick={() => onCategClick(Category.WebDevelop)}
                        className={selectedCateg === Category.WebDevelop ? styles.selected : undefined}
                    >
                        Dévelopement Web
                    </li>
                    <li
                        onClick={() => onCategClick(Category.HumanResources)}
                        className={selectedCateg === Category.HumanResources ? styles.selected : undefined}
                    >
                        RH
                    </li>
                    <li
                        onClick={() => onCategClick(Category.Commercial)}
                        className={selectedCateg === Category.Commercial ? styles.selected : undefined}
                    >
                        Commercial
                    </li>
                </ol>

                <ul>
                    <li>
                        <ExplorationCard />
                    </li>
                    <li>
                        <ExplorationCard />
                    </li>
                    <li>
                        <ExplorationCard />
                    </li>
                    <li>
                        <ExplorationCard />
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
