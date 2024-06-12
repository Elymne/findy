import City from "@src/domain/entities/city/city.entity"
import CityDatasource from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { CustomState } from "../../domain/hooks/futureUseState"
import { useRef, useState } from "react"

export default function useCityInputAutoCompletion(cityDatasource: CityDatasource) {
    const [state, setState] = useState<CustomState>(CustomState.SUCCESS)
    // TODO Renommer ceci.
    const refCities = useRef<City[]>([])
    const refCityInput = useRef<string>("")
    const refError = useRef<unknown>()
    let refTimeout: NodeJS.Timeout

    async function fetch() {
        try {
            refCities.current = []
            if (!refCityInput.current) {
                setState(CustomState.SUCCESS)
                return
            }

            refCities.current = []
            setState(CustomState.LOADING)
            refCities.current = await cityDatasource.fetchByName(refCityInput.current)
            setState(CustomState.SUCCESS)
        } catch (error) {
            refError.current = error
            setState(CustomState.FAILURE)
        }
    }

    return {
        currentCityInput: refCityInput.current,
        currentCities: refCities.current,

        async initInputText(cityCode: string) {
            if (!cityCode) {
                setState(CustomState.SUCCESS)
                return
            }

            try {
                setState(CustomState.LOADING)
                const city = await cityDatasource.fetchOneByCode(cityCode)
                refCityInput.current = city.name
                refCities.current = [city]
                setState(CustomState.SUCCESS)
            } catch (error) {
                refError.current = error
                setState(CustomState.FAILURE)
            }
        },

        updateInputText(text: string) {
            if (refTimeout != null) {
                clearTimeout(refTimeout)
            }
            refCityInput.current = text
            refTimeout = setTimeout(() => {
                fetch()
            }, 500)
        },

        getState({ onLoading, onSuccess, onFailure }: GetState) {
            if (state == CustomState.LOADING) return onLoading()
            if (state == CustomState.FAILURE) return onFailure()
            if (state == CustomState.SUCCESS) return onSuccess()
        },
    }
}

type GetState = {
    onLoading: () => JSX.Element
    onSuccess: () => JSX.Element
    onFailure: () => JSX.Element
}
