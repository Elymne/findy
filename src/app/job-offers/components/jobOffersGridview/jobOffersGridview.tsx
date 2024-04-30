import styles from "./jobOfferGridview.module.css"
import Card from "@src/components/card/card"
import LoadingBloc, { LoadingContentStyleMode } from "@src/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/components/errorBloc/errorBloc"
import { useAppContext } from "@src/app/job-offers/appContext"

export default function JobOffersGridview(): JSX.Element {
    const { getState, currentJobOffers } = useAppContext()

    return getState({
        onLoading: () => {
            return <LoadingBloc value="Chargement en cours…" styleMode={LoadingContentStyleMode.ligth} />
        },
        onFailure: () => {
            return <ErrorBloc value="Oups, une erreur s'est produite :(" styleMode={ErrorContentStyleMode.ligth} />
        },
        onWaiting() {
            return (
                <section id={styles.main}>
                    <div id={styles.content_bloc}>
                        <h1>Commencez votre recherche</h1>
                    </div>
                </section>
            )
        },
        onSuccess: () => {
            return (
                <section id={styles.main}>
                    <div id={styles.content_bloc}>
                        <ol>
                            {currentJobOffers.map((jobOffer, index) => {
                                return (
                                    <li key={index}>
                                        <Card jobOffer={jobOffer} />
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </section>
            )
        },
    })
}
