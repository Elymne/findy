import ExplorationSection from "@src/app/home/components/explorationSection/explorationSection"
import SearchSection from "@src/app/home/components/searchSection/searchSection"

export default function Page(): JSX.Element {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}
