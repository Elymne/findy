import PageJobOffers from "@src/domain/entities/jobOffer/pageJobOffers.entity"
import { OnFailure, OnLoading, OnWaiting, OnSucess } from "@src/domain/hooks/futureUseState"
import { CityDatasource, CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { JobOfferDatasource, JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { useState } from "react"

export default function useJobOffersGridviewState() {
    const _jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl
    const _cityDatasource: CityDatasource = CityDatasourceImpl

    const [_state, _setState] = useState<JobOffersGridviewState>({
        canStart: true,
        pageJobOffers: null,
        error: null,
    })

    async function init(keywords: string | null, cityName: string | null): Promise<void> {
        if (!keywords || !cityName || cityName?.length === 0 || keywords.length === 0) {
            _setState({
                ..._state,
                canStart: false,
            })
            return
        }

        try {
            const city = await _cityDatasource.fetchOneByName(cityName)
            const result = await _jobOfferDatasource.getJobOffersFromQuery(keywords, city.code, 30, 1)

            _setState({
                ..._state,
                pageJobOffers: result,
            })
        } catch (error) {
            _setState({
                ..._state,
                error: error,
            })
        }
    }

    function getState({
        onWaiting,
        onLoading,
        onSuccess,
        onFailure,
    }: {
        onWaiting: OnWaiting
        onLoading: OnLoading
        onSuccess: OnSucess<JobOffersGridviewState>
        onFailure: OnFailure
    }): JSX.Element {
        if (_state.error !== null) {
            return onFailure(_state.error)
        }

        if (_state.canStart === false) {
            return onWaiting()
        }

        if (_state.pageJobOffers === null) {
            return onLoading()
        }

        return onSuccess(_state)
    }

    return { init, getState }
}

type JobOffersGridviewState = {
    canStart: boolean
    pageJobOffers: PageJobOffers | null
    error: unknown | null
}
