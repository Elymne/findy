"use client"

import useJobOffers, { UsePageJobOffersContext } from "@src/domain/hooks/uses/usePageJobOffers"
import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/reducedSearchSection/reducedSearchSection"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Page(): JSX.Element {
    const { init, getState } = useJobOffers()
    const searchParams = useSearchParams()

    useEffect(() => {
        init(searchParams.get("keywords"), searchParams.get("city"))
    }, [])

    return (
        <UsePageJobOffersContext.Provider value={{ getState, init }}>
            <main>
                <ReducedSearchSection />
                <JobOffersGridview />
            </main>
        </UsePageJobOffersContext.Provider>
    )
}
