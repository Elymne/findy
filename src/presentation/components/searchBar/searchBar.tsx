import { ChangeEvent, useRef } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"

type OnSearch = (keyWords: string, city: string) => void

const SearchBar = ({ onSearch }: { onSearch: OnSearch }): JSX.Element => {
    const keywordsInput = useRef<string>("")
    const cityInput = useRef<string>("")

    function onClick(): void {
        onSearch(keywordsInput.current, cityInput.current)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement>): void {
        if (keyBoardEvent.code === "Enter") {
            onSearch(keywordsInput.current, cityInput.current)
        }
    }

    function onKeywordInputChange(event: ChangeEvent<HTMLInputElement>) {
        keywordsInput.current = event.target.value
    }

    function onCityInputChange(event: ChangeEvent<HTMLInputElement>) {
        cityInput.current = event.target.value
    }

    return (
        <div id={styles.main}>
            <input
                id={styles.search_bar_domain_input}
                type="text"
                placeholder="Recherche par mots-clés"
                onKeyDown={onKeyDown}
                onChange={onKeywordInputChange}
            />
            <input
                id={styles.search_bar_city_input}
                type="text"
                placeholder="Paris, Lion, Nantes..."
                onKeyDown={onKeyDown}
                onChange={onCityInputChange}
            />
            <button onClick={onClick} onKeyDown={onKeyDown}>
                <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
            </button>
        </div>
    )
}

export default SearchBar
