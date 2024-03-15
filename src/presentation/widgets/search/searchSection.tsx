import SearchBar from "../searchBar/searchBar"
import styles from "./searchSection.module.css"

const SearchSection = (): JSX.Element => {
    return (
        <section id={styles.search_section}>
            <div id={styles.content_bloc}>
                <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
                <h2>Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants !</h2>
                <div id={styles.search_bar}>
                    <SearchBar />
                </div>
            </div>
        </section>
    )
}

export default SearchSection
