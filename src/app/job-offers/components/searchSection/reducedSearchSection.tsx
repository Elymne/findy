import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()

    const searchParams = useSearchParams()
    const keywords = searchParams.get("keywords")
    const citycode = searchParams.get("citycode")

    function search(keywords: string, city: string): void {
        router.push(`/job-offers?keywords=${keywords}&city=${city}`, { scroll: false })
    }

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    keywords={keywords}
                    citycode={citycode}
                    onSearch={(keywords, city) => {
                        search(keywords, city)
                    }}
                />
            </div>
        </section>
    )
}
