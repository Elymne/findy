"use client"

import SearchBar from "@src/presentation/components/searchBar/searchBar"
import styles from "./searchSection.module.css"
import { useRouter } from "next/navigation"

export default function SearchSection(): JSX.Element {
    const router = useRouter()

    return (
        <section id={styles.search_section}>
            <div id={styles.content_bloc}>
                <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
                <h2>Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants !</h2>
                <div id={styles.search_bar}>
                    <SearchBar
                        onSearch={(keywords: string, cityName: string) => {
                            router.push(`/job-offers?keywords=${keywords}&city=${cityName}`)
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
