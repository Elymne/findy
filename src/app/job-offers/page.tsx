"use client"
import { useSearchParams } from "next/navigation"
import ReducedSearchSection from "./components/searchSection/reducedSearchSection"
import JobOffersGridview from "./components/jobOffersGridview/jobOffersGridview"

export default function Page(): JSX.Element {
    const searchParams = useSearchParams()
    const keywords = searchParams.get("keywords")
    const city = searchParams.get("city")
    return (
        <main>
            <ReducedSearchSection />
            <JobOffersGridview />
            <h1>{keywords}</h1>
            <h1>{city} </h1>
        </main>
    )
}
