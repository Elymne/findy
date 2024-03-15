import styles from "./searchBar.module.css"
import Image from "next/image"

const SearchBar = (): JSX.Element => {
    return (
        <div id={styles.main}>
            <input id={styles.search_bar_domain_input} type="text" placeholder="Recherche par mots-clés" />
            <input id={styles.search_bar_city_input} type="text" placeholder="Paris, Lion, Nantes..." />
            <button>
                <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
            </button>
        </div>
    )
}

export default SearchBar
