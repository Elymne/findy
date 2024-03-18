import styles from "./searchBar.module.css"
import Image from "next/image"

type OnSearch = (keyWords: string, city: string) => void

const SearchBar = ({ onSearch }: { onSearch: OnSearch }): JSX.Element => {
    let keyWords: string = ""
    let city: string = ""

    function onClick(): void {
        onSearch(keyWords, city)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement>): void {
        if (keyBoardEvent.code === "Enter") {
            onSearch(keyWords, city)
        }
    }

    return (
        <div id={styles.main}>
            <input id={styles.search_bar_domain_input} type="text" placeholder="Recherche par mots-clés" />
            <input id={styles.search_bar_city_input} type="text" placeholder="Paris, Lion, Nantes..." />
            <button onClick={onClick} onKeyDown={onKeyDown}>
                <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
            </button>
        </div>
    )
}

export default SearchBar
