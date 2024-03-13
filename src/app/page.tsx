import ExplorationSection from "./widgets/exploration/explorationSection"
import SearchSection from "./widgets/search/searchSection"

const Home = (): JSX.Element => {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}

export default Home
