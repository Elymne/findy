"use client"

import styles from "./pager.module.css"
import { useRouter, useSearchParams } from "next/navigation"
import { useAppContext } from "@src/app/job-offers/appContext"

export default function Pager(): JSX.Element {
    const { getState, currentTotalPageNumber } = useAppContext()
    const router = useRouter()

    const searchParams = useSearchParams()
    const keywords: string = searchParams.get("keywords") ?? ""
    const cityCode: string = searchParams.get("citycode") ?? ""
    const selectedPage: number = parseInt(searchParams.get("page") ?? "1")

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
