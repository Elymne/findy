import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter, useSearchParams } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()
    const searchParams = useSearchParams()

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    onSearch={(keywords: string, city: string) => {
                        router.push(`/job-offers?keywords=${keywords}&city=${city}`, { scroll: false })
                    }}
                    keywords={searchParams.get("keywords") ?? undefined}
                    city={searchParams.get("city") ?? undefined}
                />
            </div>
        </section>
    )
}
