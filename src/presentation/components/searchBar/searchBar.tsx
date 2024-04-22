import { ChangeEvent, useEffect, useRef, useState } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import useCitiesByName from "@src/domain/hooks/uses/useCities"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import City from "@src/domain/entities/city/city.entity"

export default function SearchBar({ keywords, cityCode, onSearch }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const cityInput = useRef<string>("")
    const citySearchList = useRef<Array<City>>([])

    const [defaultCityName, setDefaultCityName] = useState<string | null>()

    const { search, getState } = useCitiesByName()

    useEffect(() => {
        if (keywords) keywordsInput.current = keywords
        if (cityCode) findCityName(cityCode)
    }, [])

    async function findCityName(cityCode: string) {
        const cityName = (await CityDatasourceImpl.fetchOneByCode(cityCode)).name
        setDefaultCityName(cityName)
    }

    function onClick(): void {
        const cityCode = citySearchList.current.find((elem) => elem.name == cityInput.current)?.code
        if (cityCode) onSearch(keywordsInput.current, cityCode)
    }

    function onKeyDownPressed(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>): void {
        if (keyBoardEvent.code === "Enter") {
            const cityCode = citySearchList.current.find((elem) => elem.name == cityInput.current)?.code
            if (cityCode) onSearch(keywordsInput.current, cityCode)
        }
    }

    function onKeywordInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        keywordsInput.current = event.target.value
    }

    function onCityInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        cityInput.current = event.target.value
        // TODO Implémenter un delayeur ici pour éviter de faire 1 millions d'appel sur geo.api.
        search(cityInput.current)
    }

    return (
        <div id={styles.main}>
            <input
                type="text"
                name="keywords_choice"
                id="keywords_choice"
                placeholder="Recherche par mots-clés"
                onKeyDown={onKeyDownPressed}
                onChange={onKeywordInputChange}
                defaultValue={keywordsInput.current}
            />

            <input
                type="text"
                name="city_choice"
                id="city_choice"
                list="city_options"
                placeholder="Paris, Lion, Nantes..."
                onKeyDown={onKeyDownPressed}
                onChange={onCityInputChange}
                defaultValue={defaultCityName ? defaultCityName : cityInput.current}
            />

            {getState({
                onLoading: () => {
                    return (
                        <datalist id="city_options">
                            <option key={0} value={"Chargement…"}></option>
                        </datalist>
                    )
                },
                onFailure: () => {
                    return (
                        <datalist id="city_options">
                            <option key={0} value={"Une erreur s'est produite :("}></option>
                        </datalist>
                    )
                },
                onSuccess: (state) => {
                    citySearchList.current = state.value ?? []
                    return (
                        <datalist id="city_options">
                            {state.value?.map((city) => {
                                return <option key={city.code} value={city.name}></option>
                            })}
                        </datalist>
                    )
                },
            })}

            <button onClick={onClick} onKeyDown={onKeyDownPressed}>
                <Image src="svg/magnifying_glass.svg" height={30} width={30} alt="Icone de loupe" />
            </button>
        </div>
    )
}

type OnSearch = (keywords: string, cityCode: string) => void

type SearchParams = {
    onSearch: OnSearch
    keywords?: string | null
    cityCode?: string | null
}

type UiState = {
    keywordsInput: string
    cityInput: string
}
