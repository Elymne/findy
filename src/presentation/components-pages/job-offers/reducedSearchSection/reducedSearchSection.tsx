"use client"

import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()
    const searchParams = useSearchParams()

    let keywords = searchParams.get("keywords")
    let cityCode = searchParams.get("citycode")

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    onSearch={(keywords: string, cityCode: string) => {
                        router.push(`/job-offers?keywords=${keywords}&citycode=${cityCode}`)
                    }}
                    keywords={keywords}
                    cityCode={cityCode}
                />
            </div>
        </section>
    )
}
