import { ChangeEvent, useEffect, useRef } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import useSearchBarState from "./useSearchBarState"
import LoadingBloc, { LoadingContentStyleMode } from "../loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "../errorBloc/errorBloc"

type OnSearch = (keywords: string, citycode: string) => void
type SearchParams = {
    keywords: string | null
    citycode: string | null
    onSearch: OnSearch
}

export default function SearchBar({ keywords, citycode, onSearch }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const cityInput = useRef<string>("")

    const { init, getState } = useSearchBarState()

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

    useEffect(() => {
        init()
    }, [])

    return getState({
        onLoading: () => <LoadingBloc value="Loading là ?" styleMode={LoadingContentStyleMode.dark} />,
        onFailure: () => <ErrorBloc value="Oooooops" styleMode={ErrorContentStyleMode.dark} />,
        onSuccess: () => {
            return (
                <div id={styles.main}>
                    <input
                        id={styles.search_bar_domain_input}
                        type="text"
                        placeholder="Recherche par mots-clés"
                        onKeyDown={onKeyDown}
                        onChange={onKeywordInputChange}
                        value={keywords ?? undefined}
                    />
                    <input
                        id={styles.search_bar_city_input}
                        type="text"
                        placeholder="Paris, Lion, Nantes..."
                        onKeyDown={onKeyDown}
                        onChange={onCityInputChange}
                        value={citycode ?? undefined}
                    />
                    <button onClick={onClick} onKeyDown={onKeyDown}>
                        <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
                    </button>
                </div>
            )
        },
    })
}
