import JobOfferDatasource from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import JobCategory from "@src/domain/enums/jobOfferCategory"
import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import { useRef, useState } from "react"
import { CustomState } from "@src/domain/hooks/futureUseState"

export default function useJobOffersSample(jobOfferDatasource: JobOfferDatasource) {
    const [state, setState] = useState<CustomState>(CustomState.INIT)
    const refCategory = useRef<JobCategory>(JobCategory.Marketing)
    const refJobOffers = useRef<JobOffer[]>([])
    const refError = useRef<unknown>()

    return {
        currentCategory: refCategory.current,
        currentJobOffers: refJobOffers.current,
        async setCurrentCategory(category: JobCategory) {
            if (state == CustomState.LOADING) {
                return
            }
            try {
                refCategory.current = category
                refJobOffers.current = []
                setState(CustomState.LOADING)
                refJobOffers.current = await jobOfferDatasource.getJobOffersSample(category)
                setState(CustomState.SUCCESS)
            } catch (error) {
                refError.current = error
                setState(CustomState.FAILURE)
            }
        },

        getState({ onLoading, onSuccess, onFailure }: GetState) {
            if (state == CustomState.INIT) return onLoading()
            if (state == CustomState.LOADING) return onLoading()
            if (state == CustomState.SUCCESS) return onSuccess()
            if (state == CustomState.FAILURE) return onFailure()
        },
    }
}

type GetState = {
    onLoading: () => JSX.Element
    onSuccess: () => JSX.Element
    onFailure: () => JSX.Element
}
