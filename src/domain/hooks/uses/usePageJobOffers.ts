import { FutureUseState, State } from "../futureUseState"
import JobOfferDatasource, { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import CityDatasource, { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { useState } from "react"
import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"

export interface PageJobOffersState extends State<PageJobOffers> {}

export interface UsePageJobOffers extends FutureUseState<PageJobOffersState> {
    init: (keywords: string, cityName: string, currentPage: number) => Promise<void>
}

export default function useJobOffers(): UsePageJobOffers {
    const jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl
    const cityDatasource: CityDatasource = CityDatasourceImpl
    const [state, setState] = useState<PageJobOffersState>({
        value: {
            jobOffers: [],
            totalPagesNb: 0,
        },
        error: null,
    })

    return {
        async init(keywords, cityCode, currentPage) {
            setState({
                ...state,
                value: null,
            })

            try {
                const city = await cityDatasource.fetchOneByCode(cityCode)
                const result = await jobOfferDatasource.getJobOffersFromQuery(keywords, city.code, 30, currentPage ?? 1)
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
