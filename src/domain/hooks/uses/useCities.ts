import City from "@src/domain/entities/city/city.entity"
import { FutureUseState, State } from "../futureUseState"
import CityDatasource, { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { useState } from "react"

export interface CitiesState extends State<City[]> {}

export interface UseCities extends FutureUseState<CitiesState> {
    search: (name: string) => Promise<void>
}

export default function useCitiesByName(): UseCities {
    const cityDatasource: CityDatasource = CityDatasourceImpl
    const [state, setState] = useState<CitiesState>({
        value: [],
        error: null,
    })

    return {
        async search(name: string) {
            setState({
                ...state,
                value: null,
            })
            try {
                setState({
                    ...state,
                    value: await cityDatasource.fetchByName(name),
                })
            } catch (error) {
                setState({
                    ...state,
                    error: error,
                })
            }
        },

        getState({ onLoading, onSuccess, onFailure }) {
            if (state.error != null) {
                return onFailure(state.error)
            }

            if (state.value == null) {
                return onLoading()
            }

            return onSuccess(state)
        },
    }
}
