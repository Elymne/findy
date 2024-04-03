"use client"

import { useEffect } from "react"
import styles from "./jobOfferGridview.module.css"
import Card from "@src/presentation/components/card/card"
import LoadingBloc, { LoadingContentStyleMode } from "@src/presentation/components/loadingBloc/loadingBloc"
import ErrorBloc, { ErrorContentStyleMode } from "@src/presentation/components/errorBloc/errorBloc"
import { v4 as uuidv4 } from "uuid"
import { useSearchParams } from "next/navigation"
import useJobOffers from "@src/domain/hooks/uses/useJobOffers"

export default function JobOffersGridview(): JSX.Element {
    const { init, getState } = useJobOffers()
    const searchParams = useSearchParams()

    useEffect(() => {
        init(searchParams.get("keywords"), searchParams.get("city"))
    }, [])

    return getState({
        onLoading: () => {
            return <LoadingBloc value="Chargement du contenu" styleMode={LoadingContentStyleMode.ligth} />
        },
        onFailure: () => {
            return <ErrorBloc value="Oups, une erreur s'est produite :(" styleMode={ErrorContentStyleMode.ligth} />
        },
        onSuccess: (state) => {
            if (state.value!.maxPage == 0) {
                return (
                    <section id={styles.main}>
                        <div id={styles.content_bloc}>
                            <h1>Commencez votre recherche</h1>
                        </div>
                    </section>
                )
            }

            return (
                <section id={styles.main}>
                    <div id={styles.content_bloc}>
                        <ol>
                            {state.value!.jobOffers.map((jobOffer) => {
                                return (
                                    <li key={jobOffer.id ?? uuidv4()}>
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
