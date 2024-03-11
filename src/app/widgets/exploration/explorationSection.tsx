import ExplorationCard from "./explorationCard/explorationCard"
import styles from "./explorationSection.module.css"

const ExplorationSection = () => {
    return (
        <section id={styles.main}>
            <div id={styles.content}>
                <h1>Explorez nos offres d'alternance pour votre futur formation</h1>
                <h2>Filtrez selon votre domaine</h2>

                <ol>
                    <li>Marketing</li>
                    <li>Communication</li>
                    <li>Comptabilité</li>
                    <li>Dévelopement Web</li>
                    <li>RH</li>
                    <li>Commercial</li>
                    <li>Marketing</li>
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

export default ExplorationSection
