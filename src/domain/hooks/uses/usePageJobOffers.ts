import { FutureUseState, State } from "../futureUseState"
import JobOfferDatasource, { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import CityDatasource, { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { createContext, useState } from "react"
import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"

export interface PageJobOffersState extends State<PageJobOffers> {}

export interface UsePageJobOffers extends FutureUseState<PageJobOffersState> {
    init: (keywords: string | null, cityName: string | null) => Promise<void>
}

export default function useJobOffers(): UsePageJobOffers {
    const jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl
    const cityDatasource: CityDatasource = CityDatasourceImpl
    const [state, setState] = useState<PageJobOffersState>({
        value: null,
        error: null,
    })

    return {
        async init(keywords, cityName) {
            if (!keywords || !cityName || cityName?.length === 0 || keywords.length === 0) {
                setState({
                    ...state,
                    value: {
                        jobOffers: [],
                        maxPage: 0,
                    },
                })
                return
            }
            try {
                const city = await cityDatasource.fetchOneByName(cityName)
                const result = await jobOfferDatasource.getJobOffersFromQuery(keywords, city.code, 30, 1)
                setState({
                    ...state,
                    value: result,
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
