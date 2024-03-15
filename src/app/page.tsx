import ExplorationSection from "../presentation/widgets/exploration/explorationSection"
import SearchSection from "../presentation/widgets/search/searchSection"

const Home = (): JSX.Element => {
    return (
        <main>
            <SearchSection />
            <ExplorationSection />
        </main>
    )
}

export default Home
