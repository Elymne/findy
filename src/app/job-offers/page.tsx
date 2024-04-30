"use client"

import useFetchJobOffers from "@src/app/job-offers/useFetchJobOffers"
import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/reducedSearchSection/reducedSearchSection"
import JobOffersCounter from "@src/presentation/components-pages/job-offers/jobOffersCounter/JobOffersCounter.1"
import JobOffersPager from "@src/presentation/components-pages/job-offers/jobOffersPager/jobOffersPager"
import { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import AppContext from "./appContext"

export default function Page(): JSX.Element {
    const { fetch, getState, currentJobOffers, currentTotalPageNumber } = useFetchJobOffers(JobOfferDatasourceImpl, CityDatasourceImpl)

    const searchParams = useSearchParams()
    const keywords: string = searchParams.get("keywords") ?? ""
    const cityCode: string = searchParams.get("citycode") ?? ""
    const selectedPage: number = parseInt(searchParams.get("page") ?? "1")

    useEffect(() => {
        if (keywords != "" && cityCode != "") {
            fetch(keywords, cityCode, selectedPage)
        }
    }, [])

    return (
        <AppContext.Provider value={{ getState, fetch, currentJobOffers, currentTotalPageNumber }}>
            <main>
                <ReducedSearchSection keywords={keywords} cityCode={cityCode} />
                <JobOffersCounter />
                <JobOffersGridview />
                <JobOffersPager keywords={keywords} cityCode={cityCode} selectedPage={selectedPage} />
            </main>
        </AppContext.Provider>
    )
}
