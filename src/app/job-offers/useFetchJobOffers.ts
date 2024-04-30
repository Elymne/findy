"use client"

import JobOfferDatasource from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import CityDatasource from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"
import { useRef, useState } from "react"
import { CustomState } from "../../domain/hooks/futureUseState"

export interface UseFetchJobOffers {
    currentJobOffers: JobOffer[]
    currentTotalPageNumber: number
    fetch: (keywords: string, cityCode: string, currentPage: number) => Promise<void>
    getState: ({ onWaiting, onLoading, onSuccess, onFailure }: GetState) => JSX.Element
}

export default function useFetchJobOffers(jobOfferDatasource: JobOfferDatasource, cityDatasource: CityDatasource): UseFetchJobOffers {
    const [state, setState] = useState<CustomState>(CustomState.WAITING)
    const refJobOffers = useRef<JobOffer[]>([])
    const refTotalPage = useRef<number>(1)
    const refError = useRef<unknown>()

    return {
        currentJobOffers: refJobOffers.current,
        currentTotalPageNumber: refTotalPage.current,

        async fetch(keywords: string, cityCode: string, currentPage: number): Promise<void> {
            try {
                refJobOffers.current = []
                refTotalPage.current = currentPage
                setState(CustomState.LOADING)
                const city = await cityDatasource.fetchOneByCode(cityCode)
                const pageJobOffers = await jobOfferDatasource.getJobOffersFromQuery(keywords, city.code, 30, currentPage ?? 1)
                refJobOffers.current = pageJobOffers.jobOffers
                refTotalPage.current = refTotalPage.current
                setState(CustomState.SUCCESS)
            } catch (error) {
                refError.current = error
                setState(CustomState.FAILURE)
            }
        },

        getState({ onWaiting, onLoading, onSuccess, onFailure }: GetState): JSX.Element {
            if (state == CustomState.LOADING) return onLoading()
            if (state == CustomState.FAILURE) return onFailure()
            if (state == CustomState.SUCCESS) return onSuccess()
            return onWaiting()
        },
    }
}

type GetState = {
    onWaiting: () => JSX.Element
    onLoading: () => JSX.Element
    onSuccess: () => JSX.Element
    onFailure: () => JSX.Element
}
