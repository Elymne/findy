import ExplorationSection from "./components/explorationSection/explorationSection"
import SearchSection from "./components/searchSection/searchSection"

const Home = (): JSX.Element => {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}

export default Home
