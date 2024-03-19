import { PageJobOffers } from "@src/domain/entities/responses/pageJobOffers.entity"
import { OnFailure, OnLoading, OnSucess } from "@src/domain/hooks/useFutureState"
import { JobOfferDatasource, JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { useState } from "react"

export default function useJobOffersGridviewState() {
    const _jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

    const [_state, _setState] = useState<JobOffersGridviewState>({
        pageJobOffers: null,
        error: null,
    })

    async function init(): Promise<void> {
        try {
            _setState({
                ..._state,
                pageJobOffers: await _jobOfferDatasource.getJobOffersFromQuery("Marketing", "75107", 30, 1),
            })
        } catch (error) {
            _setState({
                ..._state,
                error: error,
            })
        }
    }

    function getState({
        onLoading,
        onSuccess,
        onFailure,
    }: {
        onLoading: OnLoading
        onSuccess: OnSucess<JobOffersGridviewState>
        onFailure: OnFailure
    }): JSX.Element {
        if (_state.error) {
            return onFailure(_state.error)
        }

        if (_state.pageJobOffers === null) {
            return onLoading()
        }

        return onSuccess(_state)
    }

    return { init, getState }
}

interface JobOffersGridviewState {
    pageJobOffers: PageJobOffers | null
    error: unknown | null
}
