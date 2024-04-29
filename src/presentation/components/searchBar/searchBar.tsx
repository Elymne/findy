import { ChangeEvent, useEffect, useRef, useState } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import useCityInputAutoCompletion from "@src/presentation/components/searchBar/useCityInputAutoCompletion"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"

type SearchParams = {
    onSearch: (keywords: string, cityCode: string) => void
    keywords?: string | null
    cityCode?: string | null
}

export default function SearchBar({ keywords, cityCode, onSearch }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const { currentCities, currentCityInput, updateInputText, getState } = useCityInputAutoCompletion(CityDatasourceImpl)

    // TODO : Trouver un nom approprié à ce truc.
    const [initCityName, setInitCityName] = useState<string | null>()

    useEffect(() => {
        if (keywords != null) {
            keywordsInput.current = keywords
        }
        if (cityCode != null) {
            fetchAndSetDefaultCityName(cityCode)
        }
    }, [])

    async function fetchAndSetDefaultCityName(cityCode: string) {
        setInitCityName((await CityDatasourceImpl.fetchOneByCode(cityCode)).name)
    }

    function onClick(): void {
        const cityCode = currentCities.find((elem) => elem.name == currentCityInput)?.code
        if (cityCode != null) {
            onSearch(keywordsInput.current, cityCode)
        }
    }

    function onKeyDownPressed(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>): void {
        if (keyBoardEvent.code === "Enter") {
            const cityCode = currentCities.find((elem) => elem.name == currentCityInput)?.code
            if (cityCode != null) {
                onSearch(keywordsInput.current, cityCode)
            }
        }
    }

    function onKeywordInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        keywordsInput.current = event.target.value
    }

    function onCityInputChange(event: ChangeEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>) {
        setInitCityName(null)
        updateInputText(event.target.value)
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
                defaultValue={initCityName ? initCityName : currentCityInput}
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
                onSuccess: () => {
                    return (
                        <datalist id="city_options">
                            {currentCities.map((city) => {
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
