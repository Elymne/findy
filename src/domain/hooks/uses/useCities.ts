import City from "@src/domain/entities/city/city.entity"
import { FutureUseState, State } from "../futureUseState"
import CityDatasource, { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { useState } from "react"

export interface CitiesState extends State<City[]> {}

export interface UseCities extends FutureUseState<CitiesState> {
    init: () => Promise<void>
}

export default function useCities(): UseCities {
    const cityDatasource: CityDatasource = CityDatasourceImpl
    const [state, setState] = useState<CitiesState>({
        value: null,
        error: null,
    })

    return {
        async init() {
            try {
                setState({
                    ...state,
                    value: await cityDatasource.fetchAll(),
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
