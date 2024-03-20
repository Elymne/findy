"use client"
import ReducedSearchSection from "./components/searchSection/reducedSearchSection"
import JobOffersGridview from "./components/jobOffersGridview/jobOffersGridview"

export default function Page(): JSX.Element {
    return (
        <main>
            <ReducedSearchSection />
            <JobOffersGridview />
        </main>
    )
}
