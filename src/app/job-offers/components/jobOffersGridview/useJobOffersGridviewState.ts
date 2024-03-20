import { PageJobOffers } from "@src/domain/entities/responses/pageJobOffers.entity"
import { OnFailure, OnInit, OnLoading, OnSucess } from "@src/domain/hooks/useFutureState"
import { JobOfferDatasource, JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { useState } from "react"

export default function useJobOffersGridviewState() {
    const _jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

    const [_state, _setState] = useState<JobOffersGridviewState>({
        hasStarted: false,
        pageJobOffers: null,
        error: null,
    })

    async function init(keywords: string | null, cityCode: string | null): Promise<void> {
        if (!keywords || !cityCode) {
            return
        }

        _setState({
            ..._state,
            hasStarted: true,
        })

        try {
            _setState({
                ..._state,
                pageJobOffers: await _jobOfferDatasource.getJobOffersFromQuery(keywords, "75107", 30, 1),
            })
        } catch (error) {
            _setState({
                ..._state,
                error: error,
            })
        }
    }

    function getState({
        onInit,
        onLoading,
        onSuccess,
        onFailure,
    }: {
        onInit: OnInit
        onLoading: OnLoading
        onSuccess: OnSucess<JobOffersGridviewState>
        onFailure: OnFailure
    }): JSX.Element {
        if (_state.error) {
            return onFailure(_state.error)
        }

        if (!_state.hasStarted) {
            return onInit()
        }

        if (_state.pageJobOffers === null) {
            return onLoading()
        }

        return onSuccess(_state)
    }

    return { init, getState }
}

type JobOffersGridviewState = {
    hasStarted: boolean
    pageJobOffers: PageJobOffers | null
    error: unknown | null
}
