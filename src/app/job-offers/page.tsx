"use client"

import JobOffersGridview from "@src/presentation/components-pages/job-offers/jobOffersGridview/jobOffersGridview"
import ReducedSearchSection from "@src/presentation/components-pages/job-offers/searchSection/reducedSearchSection"

export default function Page(): JSX.Element {
    return (
        <main>
            <ReducedSearchSection />
            <JobOffersGridview />
        </main>
    )
}
