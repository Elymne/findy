import SearchBar from "@src/components/searchBar/searchBar"
import styles from "./searchSection.module.css"

export default function SearchSection(): JSX.Element {
    return (
        <section id={styles.search_section}>
            <div id={styles.content_bloc}>
                <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
                <h2>Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants !</h2>
                <div id={styles.search_bar}>
                    <SearchBar keywords={""} cityCode={""} />
                </div>
            </div>
        </section>
    )
}
