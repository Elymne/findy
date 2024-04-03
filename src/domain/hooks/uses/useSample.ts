import JobOfferDatasource, { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { FutureUseState, State } from "../futureUseState"
import { JobCategEnum } from "@src/domain/enums/jobOfferCategory"
import { createContext, useRef, useState } from "react"
import SamplejobOffers from "@src/domain/entities/jobOffer/sampleJobOffers.entity"
import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"

interface SampleState extends State<JobOffer[]> {
    selectedCateg: JobCategEnum | null
}

interface UseSample extends FutureUseState<SampleState> {
    init: (category: JobCategEnum) => Promise<void>
    updateCateg: (category: JobCategEnum) => void
}

export default function useSample(): UseSample {
    const jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

    const sample = useRef<SamplejobOffers | null>(null)

    const [state, setState] = useState<SampleState>({
        selectedCateg: null,
        value: null,
        error: undefined,
    })

    function getJobOffersFromCateg(category: JobCategEnum): JobOffer[] {
        if (sample.current == null) {
            throw Error("This hook has to be initialized before using this function")
        }
        switch (category) {
            case JobCategEnum.Marketing: {
                return sample.current.marketing
            }
            case JobCategEnum.Commercial: {
                return sample.current.commercial
            }
            case JobCategEnum.Communication: {
                return sample.current.communication
            }
            case JobCategEnum.Comptability: {
                return sample.current.comptability
            }
            case JobCategEnum.HumanResources: {
                return sample.current.humanResources
            }
            case JobCategEnum.WebDevelop: {
                return sample.current.webDev
            }
        }
    }

    return {
        async init(category) {
            try {
                sample.current = await jobOfferDatasource.getSampleJobOffers()
                setState({
                    ...state,
                    selectedCateg: category,
                    value: getJobOffersFromCateg(category),
                })
            } catch (error) {
                setState({
                    ...state,
                    error: error,
                })
            }
        },
        updateCateg(category) {
            setState({
                ...state,
                selectedCateg: category,
                value: getJobOffersFromCateg(category),
            })
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

export const UsePageJobOffersContext = createContext<UseSample | null>(null)
