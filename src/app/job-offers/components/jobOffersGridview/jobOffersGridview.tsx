import { useEffect } from "react"
import styles from "./jobOfferGridview.module.css"
import useJobOffersGridviewState from "./useJobOffersGridviewState"
import Card from "@src/presentation/components/card/card"
import LoadingBloc from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc from "@src/presentation/components/errorBloc/errorBloc"
import { v4 as uuidv4 } from "uuid"

export default function JobOffersGridview(): JSX.Element {
    const { init, getState } = useJobOffersGridviewState()

    useEffect(() => {
        init()
    }, [])

    return getState({
        onLoading: () => {
            return <LoadingBloc value="Chargement du contenu" />
        },
        onFailure: () => {
            return <ErrorBloc value="Oups, une erreur s'est produite :(" />
        },
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
