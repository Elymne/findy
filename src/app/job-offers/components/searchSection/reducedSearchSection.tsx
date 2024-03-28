import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()
    const searchParams = useSearchParams()

    function search(keywords: string, city: string): void {
        router.push(`/job-offers?keywords=${keywords}&city=${city}`, { scroll: false })
    }

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    keywords={searchParams.get("keywords")}
                    city={searchParams.get("city")}
                    onSearch={(keywords, city) => {
                        search(keywords, city)
                    }}
                />
            </div>
        </section>
    )
}
