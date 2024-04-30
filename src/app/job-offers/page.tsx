"use client"

import Gridview from "@src/app/job-offers/components/gridview/gridview"
import SearchSection from "@src/app/job-offers/components/searchSection/searchSection"
import Pager from "@src/app/job-offers/components/pager/pager"
import AppContext from "./appContext"
import Counter from "./components/counter/counter"
import SearchParams from "./components/searchParams/searchParams"
import useFetchJobOffers from "./useFetchJobOffers"
import { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { CityDatasourceImpl } from "@src/infrastructure/datasources/cityDatasource/city.datasource"
import { Suspense } from "react"

export default function Page(): JSX.Element {
    const { fetch, getState, currentJobOffers, currentTotalPageNumber } = useFetchJobOffers(JobOfferDatasourceImpl, CityDatasourceImpl)

    return (
        <AppContext.Provider value={{ getState, fetch, currentJobOffers, currentTotalPageNumber }}>
            <main>
                <Suspense>
                    <SearchParams />
                    <SearchSection />
                </Suspense>
                <Counter />
                <Gridview />
                <Suspense>
                    <Pager />
                </Suspense>
            </main>
        </AppContext.Provider>
    )
}
