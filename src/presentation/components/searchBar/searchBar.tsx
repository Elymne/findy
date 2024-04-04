import { ChangeEvent, useEffect, useRef } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import LoadingBloc, { LoadingContentStyleMode } from "../loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "../errorBloc/errorBloc"
import useCities from "@src/domain/hooks/uses/useCities"

export default function SearchBar({ keywords, city, onSearch }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const cityInput = useRef<string>("")

    const { init, getState } = useCities()

    useEffect(() => {
        init()
        keywordsInput.current = keywords ?? ""
        cityInput.current = city ?? ""
    }, [])

    function onClick(): void {
        onSearch(keywordsInput.current, cityInput.current)
    }

    function onKeyDownPressed(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>): void {
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

    return getState({
        onLoading: () => <LoadingBloc value="Chargement des communes" styleMode={LoadingContentStyleMode.dark} />,
        onFailure: () => <ErrorBloc value="Une erreur s'est produite :'(" styleMode={ErrorContentStyleMode.dark} />,
        onSuccess: (state) => {
            return (
                <div id={styles.main}>
                    <input
                        type="text"
                        name="keywords_choice"
                        id="keywords_choice"
                        placeholder="Recherche par mots-clés"
                        onKeyDown={onKeyDownPressed}
                        onChange={onKeywordInputChange}
                        defaultValue={keywords ?? undefined}
                    />

                    <input
                        type="text"
                        name="city_choice"
                        id="city_choice"
                        list="city_options"
                        placeholder="Paris, Lion, Nantes..."
                        onKeyDown={onKeyDownPressed}
                        onChange={onCityInputChange}
                        defaultValue={city ?? undefined}
                    />

                    <datalist id="city_options">
                        {state.value?.map((city) => {
                            return <option key={city.code} value={city.name}></option>
                        })}
                    </datalist>

                    <button onClick={onClick} onKeyDown={onKeyDownPressed}>
                        <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
                    </button>
                </div>
            )
        },
    })
}

type OnSearch = (keywords: string, city: string) => void

type SearchParams = {
    onSearch: OnSearch
    keywords?: string | null
    city?: string | null
}
