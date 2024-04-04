"use client"

import useJobOffers, { UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/reducedSearchSection/reducedSearchSection"
import { createContext, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import JobOffersCounter from "@src/presentation/components-pages/job-offers/jobOffersCounter/jobOffersCounter"
import JobOffersPager from "@src/presentation/components-pages/job-offers/jobOffersPager/jobOffersPager"

export const JobOffersPageContext = createContext<UsePageJobOffers | null>(null)

export default function Page(): JSX.Element {
    const { init, getState } = useJobOffers()
    const searchParams = useSearchParams()

    const keywords = searchParams.get("keywords")
    const city = searchParams.get("city")

    useEffect(() => {
        init(keywords, city)
    }, [keywords, city])

    return (
        <JobOffersPageContext.Provider value={{ getState, init }}>
            <main>
                <ReducedSearchSection />
                <JobOffersCounter />
                <JobOffersGridview />
                <JobOffersPager />
            </main>
        </JobOffersPageContext.Provider>
    )
}
