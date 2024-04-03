import City from "@src/domain/entities/city/city.entity"
import { OnFailure, OnLoading, OnSucess } from "@src/domain/hooks/futureUseState"
import { CityDatasource, CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { useState } from "react"

export default function useSearchBarState() {
    const _cityDatasource: CityDatasource = CityDatasourceImpl

    const [_state, _setState] = useState<State>({
        cities: null,
        error: null,
    })

    async function init(): Promise<void> {
        try {
            _setState({
                ..._state,
                cities: await _cityDatasource.fetchAll(),
            })
        } catch (error) {
            _setState({
                ..._state,
                error: error,
            })
        }
    }

    function getState({ onLoading, onSuccess, onFailure }: GetState): JSX.Element {
        if (_state.error) {
            return onFailure(_state.error)
        }
        if (!_state.cities) {
            return onLoading()
        }
        return onSuccess(_state)
    }

    return { init, getState }
}

type GetState = {
    onLoading: OnLoading
    onSuccess: OnSucess<State>
    onFailure: OnFailure
}

type State = {
    cities: City[] | null
    error: any | null
}
