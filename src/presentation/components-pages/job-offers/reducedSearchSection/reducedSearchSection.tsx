"use client"

import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter } from "next/navigation"

type ReducedSearchSectionParams = { keywords: string; cityCode: string }
export default function ReducedSearchSection({ keywords, cityCode }: ReducedSearchSectionParams): JSX.Element {
    const router = useRouter()

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
