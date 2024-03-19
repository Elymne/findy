import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./reducedSearchSection.module.css"
import { useRouter } from "next/navigation"

export default function ReducedSearchSection(): JSX.Element {
    const router = useRouter()

    function search(keywords: string, city: string): void {
        router.push(`/job-offers?keywords=${keywords}&city=${city}`, { scroll: false })
    }

    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar
                    onSearch={(keywords, city) => {
                        search(keywords, city)
                    }}
                />
            </div>
        </section>
    )
}
