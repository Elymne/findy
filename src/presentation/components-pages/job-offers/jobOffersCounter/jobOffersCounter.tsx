import { JobOffersPageContext } from "@src/app/job-offers/page"
import { UsePageJobOffers } from "@src/domain/hooks/uses/usePageJobOffers"
import { useContext } from "react"

export default function JobOffersCounter(): JSX.Element {
    const { getState } = useContext(JobOffersPageContext) as UsePageJobOffers

    return getState({
        onLoading() {
            return <h1>Chargement</h1>
        },
        onFailure(error) {
            return <h1>Error</h1>
        },
        onSuccess(value) {
            return <h1>Counter</h1>
        },
    })
}
