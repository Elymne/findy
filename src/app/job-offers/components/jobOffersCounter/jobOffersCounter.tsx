import { useAppContext } from "@src/app/job-offers/appContext"
import styles from "./jobOffersCounter.module.css"

export default function JobOffersCounter(): JSX.Element {
    const { getState, currentJobOffers, currentTotalPageNumber } = useAppContext()
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
                            Nombres d&apos;offres : <span>{maxItems}</span>
                        </h1>
                    </div>
                </section>
            )
        },
    })
}
