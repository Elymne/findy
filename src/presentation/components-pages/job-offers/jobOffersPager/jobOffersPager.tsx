import styles from "./jobOffersPager.module.css"
import { useContext } from "react"
import { JobOffersPageContext } from "@src/app/job-offers/page"
import { UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"

export default function JobOffersPager(): JSX.Element {
    const { getState } = useContext(JobOffersPageContext) as UsePageJobOffers

    function renderNumbersPager(totalPage: number, currentPage: number): JSX.Element[] {
        const pages = []
        for (let i = 1; i < totalPage + 1; i++) {
            pages.push(<li className={styles.page}> {i} </li>)
        }
        return pages
    }

    return getState({
        onLoading() {
            return <LoadingBloc value="" styleMode={LoadingContentStyleMode.ligth} />
        },
        onFailure() {
            return <ErrorBloc value="" styleMode={ErrorContentStyleMode.ligth} />
        },
        onSuccess(result) {
            return (
                <nav id={styles.main}>
                    <div id={styles.contentBloc}>
                        <ul>
                            <li className={styles.pagerStep}> {"<"} </li>
                            {renderNumbersPager(result.value!.totalPagesNb, 1)}
                            <li className={styles.pagerStep}> {">"} </li>
                        </ul>
                    </div>
                </nav>
            )
        },
    })
}
