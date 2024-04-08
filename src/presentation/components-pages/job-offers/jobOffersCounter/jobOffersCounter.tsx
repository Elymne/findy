import { JobOffersPageContext } from "@src/app/job-offers/page"
import { UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import { useContext } from "react"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import styles from "./jobOffersCounter.module.css"

export default function JobOffersCounter(): JSX.Element {
    const { getState } = useContext(JobOffersPageContext) as UsePageJobOffers

    const errorMarge: number = Math.floor(Math.random() * 5)

    return getState({
        onLoading() {
            return <LoadingBloc value="" styleMode={LoadingContentStyleMode.ligth} />
        },
        onFailure() {
            return <ErrorBloc value="" styleMode={ErrorContentStyleMode.ligth} />
        },
        onSuccess(result) {
            const maxItems = (result.value?.totalPagesNb ?? 1) * 50 - errorMarge
            return (
                <section id={styles.main}>
                    <div id={styles.contentBloc}>
                        <h1>
                            Nombres d'offres : <span>{maxItems}</span>
                        </h1>
                    </div>
                </section>
            )
        },
    })
}
