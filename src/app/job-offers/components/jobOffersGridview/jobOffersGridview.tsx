import { useEffect } from "react"
import styles from "./jobOfferGridview.module.css"
import useJobOffersGridviewState from "./useJobOffersGridviewState"
import Card from "@src/presentation/components/card/card"
import { v4 as uuidv4 } from "uuid"

export default function JobOffersGridview(): JSX.Element {
    const { init, getState } = useJobOffersGridviewState()

    useEffect(() => {
        init()
    }, [])

    return getState({
        onLoading: () => (
            <section id={styles.main}>
                <div id={styles.content_bloc}>
                    <h1>LOADING</h1>
                </div>
            </section>
        ),
        onFailure: () => (
            <section id={styles.main}>
                <div id={styles.content_bloc}>
                    <h1>Error</h1>
                </div>
            </section>
        ),
        onSuccess: (_state) => (
            <section id={styles.main}>
                <div id={styles.content_bloc}>
                    <ol>
                        {_state.pageJobOffers?.jobOffers.map((jobOffer) => {
                            return (
                                <li key={jobOffer.id ?? uuidv4()}>
                                    <Card jobOffer={jobOffer} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </section>
        ),
    })
}
