"use client"

import { createContext, useContext } from "react"
import { UseFetchJobOffers } from "./useFetchJobOffers"

const AppContext = createContext<UseFetchJobOffers | null>(null)

export function useAppContext() {
    const appContext = useContext(AppContext)
    if (appContext == null) {
        throw new Error("App context hasn't been initialized.")
    }
    return appContext
}

export default AppContext
