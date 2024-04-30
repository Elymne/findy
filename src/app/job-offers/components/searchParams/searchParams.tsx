"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useAppContext } from "../../appContext"

export default function SearchParams() {
    const { fetch } = useAppContext()

    const searchParams = useSearchParams()
    const keywords: string = searchParams.get("keywords") ?? ""
    const cityCode: string = searchParams.get("citycode") ?? ""
    const selectedPage: number = parseInt(searchParams.get("page") ?? "1")

    useEffect(() => {
        if (keywords != "" && cityCode != "") {
            fetch(keywords, cityCode, selectedPage)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return <></>
}
