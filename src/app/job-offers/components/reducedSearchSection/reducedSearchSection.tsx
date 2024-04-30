import styles from "./reducedSearchSection.module.css"
import SearchBar from "@src/components/searchBar/searchBar"

type ReducedSearchSectionParams = { keywords: string; cityCode: string }
export default function ReducedSearchSection({ keywords, cityCode }: ReducedSearchSectionParams): JSX.Element {
    return (
        <section id={styles.main}>
            <div id={styles.content_bloc}>
                <SearchBar keywords={keywords} cityCode={cityCode} />
            </div>
        </section>
    )
}
