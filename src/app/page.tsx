"use client"
import ExplorationSection from "./components/explorationSection/explorationSection"
import SearchSection from "./components/searchSection/searchSection"

export default function Page(): JSX.Element {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}
