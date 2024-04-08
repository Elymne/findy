"use client"

import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()
    const searchParams = useSearchParams()

    let city = searchParams.get("city")
    let keywords = searchParams.get("keywords")

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    onSearch={(keywords: string, city: string) => {
                        router.push(`/job-offers?keywords=${keywords}&city=${city}`)
                    }}
                    keywords={keywords}
                    city={city}
                />
            </div>
        </section>
    )
}
