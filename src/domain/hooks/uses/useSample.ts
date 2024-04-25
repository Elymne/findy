import JobOfferDatasource, { JobOfferDatasourceImpl } from "@src/infrastructure/datasources/jobOfferDatasource/jobOffer.datasource"
import { FutureUseState, State } from "../futureUseState"
import { JobCategEnum } from "@src/domain/enums/jobOfferCategory"
import { useState } from "react"
import JobOffer from "@src/domain/entities/jobOffer/jobOffer.entity"

interface SampleState extends State<JobOffer[]> {}

interface UseSample extends FutureUseState<SampleState> {
    setCurrentCategory: (category: JobCategEnum) => Promise<void>
    getCurrentCategory: () => JobCategEnum | null
}

export default function useSample(): UseSample {
    const jobOfferDatasource: JobOfferDatasource = JobOfferDatasourceImpl

    const [category, setCategory] = useState<JobCategEnum | null>(null)
    const [state, setState] = useState<SampleState>({
        value: [],
        error: undefined,
    })

    return {
        async setCurrentCategory(category) {
            if (state.value == null) {
                return
            }

            try {
                setCategory(category)
                setState({
                    value: null,
                    error: null,
                })

                const jobOffersResult = await jobOfferDatasource.getSampleJobOffers(category)

                console.log(`Result : ${jobOffersResult}`)

                setState({
                    ...state,
                    value: jobOffersResult.slice(0, 4),
                })
            } catch (error) {
                setState({
                    error: error,
                    value: [],
                })
            }
        },

        getCurrentCategory() {
            if (state.value == null) {
                return null
            }
            return category
        },

        getState({ onLoading, onSuccess, onFailure }) {
            if (state.error != null) {
                return onFailure(state.error)
            }

            if (state.value == null) {
                return onLoading()
            }

            return onSuccess(state)
        },
    }
}
