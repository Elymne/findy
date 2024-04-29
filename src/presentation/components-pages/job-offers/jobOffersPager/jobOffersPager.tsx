import styles from "./jobOffersPager.module.css"
import { useContext } from "react"
import { JobOffersPageContext } from "@src/app/job-offers/page"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import { useRouter, useSearchParams } from "next/navigation"
import { UseFetchJobOffers } from "@src/app/job-offers/useFetchJobOffers"

type JobOffersPagerParams = { keywords: string; cityCode: string; selectedPage: number }
export default function JobOffersPager({ keywords, cityCode, selectedPage }: JobOffersPagerParams): JSX.Element {
    const { getState, currentTotalPageNumber } = useContext(JobOffersPageContext) as UseFetchJobOffers
    const router = useRouter()

    function onClick(type: PageElementType, totalPages: number, selectedPage?: number): void {
        switch (type) {
            case PageElementType.page:
                router.push(`/job-offers?keywords=${keywords}&city=${cityCode}&page=${selectedPage}`)
                return
            case PageElementType.backward:
                if (selectedPage && selectedPage > 1) {
                    router.push(`/job-offers?keywords=${keywords}&city=${cityCode}&page=${selectedPage - 1}`)
                }
                return
            case PageElementType.forward:
                if (selectedPage && selectedPage < totalPages) {
                    router.push(`/job-offers?keywords=${keywords}&city=${cityCode}&page=${selectedPage + 1}`)
                }
                return
        }
    }

    function renderPagerItems(): JSX.Element[] {
        const pages = []
        pages.push(
            <li
                className={selectedPage == 1 ? styles.pagerStepInactive : styles.pagerStep}
                onClick={() => {
                    if (selectedPage != 1) {
                        onClick(PageElementType.backward, currentTotalPageNumber)
                    }
                }}
            >
                {"<"}
            </li>
        )
        for (let i = 1; i < currentTotalPageNumber + 1; i++) {
            pages.push(
                <li
                    key={i}
                    className={i == selectedPage ? styles.pageActive : styles.page}
                    onClick={() => {
                        if (i != selectedPage) {
                            onClick(PageElementType.page, currentTotalPageNumber, i)
                        }
                    }}
                >
                    {i}
                </li>
            )
        }
        pages.push(
            <li
                className={selectedPage == currentTotalPageNumber ? styles.pagerStepInactive : styles.pagerStep}
                onClick={() => {
                    if (selectedPage != currentTotalPageNumber) {
                        onClick(PageElementType.forward, currentTotalPageNumber)
                    }
                }}
            >
                {">"}
            </li>
        )
        return pages
    }

    return getState({
        onLoading: () => <></>,
        onFailure: () => <></>,
        onWaiting: () => <></>,
        onSuccess() {
            if (currentTotalPageNumber < 2) {
                return <></>
            }

            return (
                <nav id={styles.main}>
                    <div id={styles.contentBloc}>
                        <ul>{renderPagerItems()}</ul>
                    </div>
                </nav>
            )
        },
    })
}

enum PageElementType {
    backward,
    forward,
    page,
}
