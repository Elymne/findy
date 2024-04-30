"use client"

import styles from "./searchSection.module.css"
import { useSearchParams } from "next/navigation"
import SearchBar from "@src/components/searchBar/searchBar"

export default function SearchSection(): JSX.Element {
    const searchParams = useSearchParams()
    const keywords: string = searchParams.get("keywords") ?? ""
    const cityCode: string = searchParams.get("citycode") ?? ""

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar keywords={keywords} cityCode={cityCode} />
            </div>
        </section>
    )
}
