import { useState } from "react"
import { OnFailure, OnLoading, OnSucess } from "@src/domain/hooks/config/useFutureState"
import { SamplejobOffers } from "@src/domain/entities/sampleJobOffers.entity"
import { JobOfferCategory } from "./enums/jobOfferCategory.enum"
import { JobOfferDatasource, JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { JobOffer } from "../entities/jobOffer/jobOffer.entity"

const _jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

// ! Pratiquement sur que c'est de la grosse merde.
let _sample: SamplejobOffers
let _error: any

export const useFutureGetJobOffersFromSample = () => {
    const [_jobOffers, _setJobOffers] = useState<JobOffer[]>([])

    function getJobOffers(future: { onLoading: OnLoading; onSuccess: OnSucess<JobOffer[]>; onFailure: OnFailure }): JSX.Element {
        if (!_sample) {
            return future.onLoading()
        }
        if (_error) {
            return future.onFailure(_error)
        }
        return future.onSuccess(_jobOffers)
    }

    async function fetchSample(): Promise<void> {
        try {
            _sample = await _jobOfferDatasource.getSampleJobOffers()
        } catch (error) {
            _error = error
        }
    }

    async function selectJobOffersFromCategory(category: JobOfferCategory): Promise<void> {
        if (!_sample) {
            return
        }
        switch (category) {
            case JobOfferCategory.Marketing: {
                _setJobOffers(_sample.marketing)
                return
            }
            case JobOfferCategory.Communication: {
                _setJobOffers(_sample.communication)
                return
            }
            case JobOfferCategory.Comptability: {
                _setJobOffers(_sample.comptability)
                return
            }
            case JobOfferCategory.WebDevelop: {
                _setJobOffers(_sample.webDev)
                return
            }
            case JobOfferCategory.HumanResources: {
                _setJobOffers(_sample.humanResources)
                return
            }
            case JobOfferCategory.Commercial: {
                _setJobOffers(_sample.commercial)
                return
            }
            default: {
                _setJobOffers([])
                return
            }
        }
    }

    return {
        getJobOffers,
        fetchSample,
        selectJobOffersFromCategory,
    }
}
