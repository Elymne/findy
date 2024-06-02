"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import styles from "./searchBar.module.css"
import Image from "next/image"
import useCityInputAutoCompletion from "@src/components/searchBar/useCityInputAutoCompletion"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"

type SearchParams = {
    keywords: string
    cityCode: string
}

export default function SearchBar({ keywords, cityCode }: SearchParams): JSX.Element {
    const keywordsInput = useRef<string>("")
    const { currentCities, currentCityInput, initInputText, updateInputText, getState } = useCityInputAutoCompletion(CityDatasourceImpl)

    // TODO : Trouver un nom approprié à ce truc.
    const [initCityName, setInitCityName] = useState<string | null>()

    useEffect(() => {
        keywordsInput.current = keywords
        initInputText(cityCode)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function onClick(): void {
        const cityCode = currentCities.find((elem) => elem.name == currentCityInput)?.code
        if (cityCode != null) {
            console.log(`/job-offers?keywords=${keywordsInput.current}&citycode=${cityCode}`)
            location.href = `/job-offers?keywords=${keywordsInput.current}&citycode=${cityCode}`
        }
    }

    function onKeyDownPressed(keyBoardEvent: React.KeyboardEvent<HTMLButtonElement | HTMLInputElement | HTMLSelectElement>): void {
        if (keyBoardEvent.code === "Enter") {
            const cityCode = currentCities.find((elem) => elem.name == currentCityInput)?.code
            if (cityCode != null) {
                console.log(`/job-offers?keywords=${keywordsInput.current}&citycode=${cityCode}`)
                location.href = `/job-offers?keywords=${keywordsInput.current}&citycode=${cityCode}`
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
                placeholder="Paris, Lyon, Nantes..."
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
