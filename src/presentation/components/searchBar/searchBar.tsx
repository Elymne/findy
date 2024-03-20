import { ChangeEvent, useEffect, useRef } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import useSearchBarState from "./useSearchBarState"
import LoadingBloc, { LoadingContentStyleMode } from "../loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "../errorBloc/errorBloc"
import { v4 } from "uuid"

type OnSearch = (keywords: string, city: string) => void
type SearchParams = {
    keywords: string | null
    city: string | null
    onSearch: OnSearch
}

export default function SearchBar({ keywords, city: city, onSearch }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const cityInput = useRef<string>("")

    const { init, getState } = useSearchBarState()

    function onClick(): void {
        onSearch(keywordsInput.current, cityInput.current)
    }

    function onKeyDown(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>): void {
        if (keyBoardEvent.code === "Enter") {
            onSearch(keywordsInput.current, cityInput.current)
        }
    }

    function onKeywordInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        keywordsInput.current = event.target.value
    }

    function onCityInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        cityInput.current = event.target.value
    }

    useEffect(() => {
        init()
    }, [])

    return getState({
        onLoading: () => <LoadingBloc value="Loading là ?" styleMode={LoadingContentStyleMode.dark} />,
        onFailure: () => <ErrorBloc value="Oooooops" styleMode={ErrorContentStyleMode.dark} />,
        onSuccess: (_state) => {
            return (
                <div id={styles.main}>
                    <input
                        type="text"
                        name="keywords_choice"
                        id="keywords_choice"
                        placeholder="Recherche par mots-clés"
                        onKeyDown={onKeyDown}
                        onChange={onKeywordInputChange}
                        value={keywords ?? undefined}
                    />
                    <input
                        type="text"
                        name="city_choice"
                        id="city_choice"
                        list="city_options"
                        placeholder="Paris, Lion, Nantes..."
                        onKeyDown={onKeyDown}
                        onChange={onCityInputChange}
                        value={city ?? undefined}
                    />
                    <datalist id="city_options">
                        {_state.cities?.map((city) => {
                            return <option key={v4()} value={city.name}></option>
                        })}
                    </datalist>

                    <button onClick={onClick} onKeyDown={onKeyDown}>
                        <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
                    </button>
                </div>
            )
        },
    })
}
