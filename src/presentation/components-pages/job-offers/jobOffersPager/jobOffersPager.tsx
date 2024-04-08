import styles from "./jobOffersPager.module.css"
import { useContext } from "react"
import { JobOffersPageContext } from "@src/app/job-offers/page"
import { PageJobOffersState, UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import { useRouter, useSearchParams } from "next/navigation"

export default function JobOffersPager(): JSX.Element {
    const router = useRouter()
    const searchParams = useSearchParams()

    let city = searchParams.get("city")
    let keywords = searchParams.get("keywords")
    let currentPage = searchParams.get("page") ?? "1"

    const { getState } = useContext(JobOffersPageContext) as UsePageJobOffers

    function onClick(type: PageElementType, totalPages: number, selectedPage?: number): void {
        switch (type) {
            case PageElementType.page:
                router.push(`/job-offers?keywords=${keywords}&city=${city}&page=${selectedPage}`)
                return
            case PageElementType.backward:
                if (currentPage && +currentPage > 1) {
                    router.push(`/job-offers?keywords=${keywords}&city=${city}&page=${+currentPage - 1}`)
                }
                return
            case PageElementType.forward:
                if (currentPage && +currentPage < totalPages) {
                    router.push(`/job-offers?keywords=${keywords}&city=${city}&page=${+currentPage + 1}`)
                }
                return
        }
    }

    function renderPagerItems(pageJobOffersState: PageJobOffersState, currentPage: number): JSX.Element[] {
        const pages = []
        pages.push(
            <li
                className={currentPage == 1 ? styles.pagerStepInactive : styles.pagerStep}
                onClick={() => {
                    if (currentPage != 1) {
                        onClick(PageElementType.backward, pageJobOffersState.value!.totalPagesNb)
                    }
                }}
            >
                {"<"}
            </li>
        )
        for (let i = 1; i < pageJobOffersState.value!.totalPagesNb + 1; i++) {
            pages.push(
                <li
                    key={i}
                    className={i == currentPage ? styles.pageActive : styles.page}
                    onClick={() => {
                        if (i != currentPage) {
                            onClick(PageElementType.page, pageJobOffersState.value!.totalPagesNb, i)
                        }
                    }}
                >
                    {i}
                </li>
            )
        }
        pages.push(
            <li
                className={currentPage == pageJobOffersState.value!.totalPagesNb ? styles.pagerStepInactive : styles.pagerStep}
                onClick={() => {
                    if (currentPage != pageJobOffersState.value!.totalPagesNb) {
                        onClick(PageElementType.forward, pageJobOffersState.value!.totalPagesNb)
                    }
                }}
            >
                {">"}
            </li>
        )
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
            if (result.value!.totalPagesNb < 2) {
                return <></>
            }

            return (
                <nav id={styles.main}>
                    <div id={styles.contentBloc}>
                        <ul>{renderPagerItems(result, parseInt(currentPage))}</ul>
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
