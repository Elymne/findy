import ExplorationSection from "./widgets/exploration/explorationSection"
import HookSection from "./widgets/hook/hookSection"

const Home = (): JSX.Element => {
    return (
        <main>
            <HookSection />
            <ExplorationSection />
        </main>
    )
}

export default Home
