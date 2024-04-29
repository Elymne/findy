import { JobOffersPageContext } from "@src/app/job-offers/page"
import { useContext } from "react"
import styles from "./jobOffersCounter.module.css"
import { UseFetchJobOffers } from "@src/app/job-offers/useFetchJobOffers"

export default function JobOffersCounter(): JSX.Element {
    const { getState, currentJobOffers, currentTotalPageNumber } = useContext(JobOffersPageContext) as UseFetchJobOffers
    const errorMarge: number = Math.floor(Math.random() * 5)

    return getState({
        onWaiting: () => <></>,
        onLoading: () => <></>,
        onFailure: () => <></>,
        onSuccess() {
            if (currentJobOffers.length == 0) {
                return <></>
            }

            const maxItems = currentTotalPageNumber * 50 - errorMarge
            return (
                <section id={styles.main}>
                    <div id={styles.contentBloc}>
                        <h1>
                            Nombres d&aposoffres : <span>{maxItems}</span>
                        </h1>
                    </div>
                </section>
            )
        },
    })
}
