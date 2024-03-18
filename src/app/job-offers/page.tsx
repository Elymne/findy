"use client"
import { useSearchParams } from "next/navigation"
import SearchSection from "../components/searchSection/searchSection"

export default function Page(): JSX.Element {
    const searchParams = useSearchParams()
    const keywords = searchParams.get("keywords")
    const city = searchParams.get("city")
    return (
        <main>
            <SearchSection />
            <h1>{keywords}</h1>
            <h1>{city} </h1>
        </main>
    )
}
