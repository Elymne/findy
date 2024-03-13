import styles from "./searchSection.module.css"

const SearchSection = (): JSX.Element => {
    return (
        <section id={styles.search_section}>
            <div id={styles.content_bloc}>
                <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
                <h2>Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants !</h2>

                <div id={styles.search_bar}>
                    <input id={styles.search_bar_domain_input} type="text" placeholder="Recherche par mots-clés" />
                    <input id={styles.search_bar_city_input} type="text" placeholder="Paris, Lion, Nantes..." />
                    <button>GA</button>
                </div>
            </div>
        </section>
    )
}

export default SearchSection
