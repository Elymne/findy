"use client"

import useJobOffers, { UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/reducedSearchSection/reducedSearchSection"
import { useSearchParams } from "next/navigation"
import { createContext, useEffect } from "react"

export const JobOffersPageContext = createContext<UsePageJobOffers | null>(null)

export default function Page(): JSX.Element {
    const { init, getState } = useJobOffers()
    const searchParams = useSearchParams()

    useEffect(() => {
        init(searchParams.get("keywords"), searchParams.get("city"))
    }, [])

    return (
        <JobOffersPageContext.Provider value={{ getState, init }}>
            <main>
                <ReducedSearchSection />
                <JobOffersGridview />
            </main>
        </JobOffersPageContext.Provider>
    )
}
