"use client"

import useFetchJobOffers, { UseFetchJobOffers } from "@src/app/job-offers/useFetchJobOffers"
import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/reducedSearchSection/reducedSearchSection"
import { createContext, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import JobOffersCounter from "@src/presentation/components-pages/job-offers/jobOffersCounter/jobOffersCounter"
import JobOffersPager from "@src/presentation/components-pages/job-offers/jobOffersPager/jobOffersPager"
import { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"

export const JobOffersPageContext = createContext<UseFetchJobOffers | null>(null)

export default function Page(): JSX.Element {
    const { getState, fetch, currentJobOffers, currentTotalPageNumber } = useFetchJobOffers(JobOfferDatasourceImpl, CityDatasourceImpl)
    const searchParams = useSearchParams()

    const keywords: string = searchParams.get("keywords") ?? ""
    const cityCode: string = searchParams.get("citycode") ?? ""
    const selectedPage: number = parseInt(searchParams.get("page") ?? "1")

    useEffect(() => {
        if (keywords && cityCode && cityCode?.length !== 0 && keywords.length !== 0) {
            fetch(keywords, cityCode, selectedPage)
        }
    }, [])

    return (
        <JobOffersPageContext.Provider value={{ getState, fetch, currentJobOffers, currentTotalPageNumber }}>
            <main>
                <ReducedSearchSection keywords={keywords} cityCode={cityCode} />
                <JobOffersCounter />
                <JobOffersGridview />
                <JobOffersPager keywords={keywords} cityCode={cityCode} selectedPage={selectedPage} />
            </main>
        </JobOffersPageContext.Provider>
    )
}
