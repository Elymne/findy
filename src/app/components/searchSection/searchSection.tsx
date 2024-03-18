"use client"
import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./searchSection.module.css"
import { useRouter } from "next/navigation"

export default function SearchSection(): JSX.Element {
    const router = useRouter()

    function search(keywords: string, city: string): void {
        router.push(`/job-offers?keywords=${keywords}&city=${city}`, { scroll: false })
    }

    return (
        <section id={styles.search_section}>
            <div id={styles.content_bloc}>
                <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
                <h2>Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants !</h2>
                <div id={styles.search_bar}>
                    <SearchBar
                        onSearch={(keywords, city) => {
                            search(keywords, city)
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
