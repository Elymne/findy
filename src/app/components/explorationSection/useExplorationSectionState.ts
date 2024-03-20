import { useRef, useState } from "react"
import { JobOfferDatasource, JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { OnFailure, OnLoading, OnSucess } from "../../../domain/hooks/useFutureState"
import { JobOfferCategory } from "@src/domain/entities/enums/jobOfferCategory"
import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import SamplejobOffers from "@src/domain/entities/jobOffer/sampleJobOffers.entity"

export default function useExplorationState() {
    const _jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

    const _sample = useRef<SamplejobOffers | null>(null)

    const [_state, _setState] = useState<State>({
        selectedCategory: null,
        jobOffers: null,
        error: null,
    })

    async function init(): Promise<void> {
        try {
            _sample.current = await _jobOfferDatasource.getSampleJobOffers()
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
        if (!_state.jobOffers) {
            return onLoading()
        }
        return onSuccess(_state)
    }

    function changeCategory(category: JobOfferCategory): void {
        if (!_sample.current) {
            return
        }

        // todo c'est moche j'aime pas.
        switch (category) {
            case JobOfferCategory.Marketing: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.marketing,
                })
                break
            }
            case JobOfferCategory.Communication: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.communication,
                })
                break
            }
            case JobOfferCategory.Comptability: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.comptability,
                })
                break
            }
            case JobOfferCategory.WebDevelop: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.webDev,
                })
                break
            }
            case JobOfferCategory.HumanResources: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.humanResources,
                })
                break
            }
            case JobOfferCategory.Commercial: {
                _setState({
                    ..._state,
                    selectedCategory: category,
                    jobOffers: _sample.current.commercial,
                })
                break
            }
            default: {
                _setState({
                    selectedCategory: null,
                    jobOffers: [],
                    error: null,
                })
                break
            }
        }
    }

    return { init, getState, changeCategory }
}

type GetState = {
    onLoading: OnLoading
    onSuccess: OnSucess<State>
    onFailure: OnFailure
}

type State = {
    selectedCategory: JobOfferCategory | null
    jobOffers: JobOffer[] | null
    error: unknown | null
}
