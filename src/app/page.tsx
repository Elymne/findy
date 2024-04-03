import ExplorationSection from "@src/presentation/components-pages/home/explorationSection/explorationSection"
import SearchSection from "@src/presentation/components-pages/home/searchSection/searchSection"

export default function Page(): JSX.Element {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}
