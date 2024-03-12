import { SourceSite } from "@src/domain/entities/enums/sourceSite"
import { JobOffer } from "@src/domain/entities/jobOffer"
import { useState } from "react"
import { v4 } from "uuid"
import { Category } from "./useSelectCategory.hook"
import { OnFailure, OnLoading, OnSucess } from "@src/core/useFutureState"

export const useGetJobOffers = () => {
    const [_jobOffers, _setJobOffers] = useState<JobOffer[]>()

    function getJobOffers(future: { onLoading: OnLoading; onSuccess: OnSucess<JobOffer[]>; onFailure: OnFailure }): JSX.Element {
        try {
            if (_jobOffers == undefined) {
                return future.onLoading()
            }
            return future.onSuccess(_jobOffers)
        } catch (err) {
            return future.onFailure(err)
        }
    }

    async function setJobOffers(category: Category): Promise<void> {
        _setJobOffers(undefined)
        await sleep(1000)

        if (category == Category.Commercial) {
            _setJobOffers([
                {
                    id: v4(),
                    title: "Développeur Full-Stack",
                    image_url: "",
                    company_name: "MongolianDev",
                    company_logo_url: "",
                    city_name: "Paris",
                    created_while: "Il y a 12 mois",
                    source_url: "",
                    source_data: SourceSite.Ftapi,
                },
                {
                    id: v4(),
                    title: "Marketing",
                    image_url: "",
                    company_name: "MongolianDev",
                    company_logo_url: "",
                    city_name: "Paris",
                    created_while: "Il y a 9 mois",
                    source_url: "",
                    source_data: SourceSite.Ftapi,
                },
                {
                    id: v4(),
                    title: "Développeur Full-Stack",
                    image_url: "",
                    company_name: "MongolianDev",
                    company_logo_url: "",
                    city_name: "Paris",
                    created_while: "Il y a 12 mois",
                    source_url: "",
                    source_data: SourceSite.Ftapi,
                },
                {
                    id: v4(),
                    title: "Développeur Full-Stack",
                    image_url: "",
                    company_name: "MongolianDev",
                    company_logo_url: "",
                    city_name: "Paris",
                    created_while: "Il y a 12 mois",
                    source_url: "",
                    source_data: SourceSite.Ftapi,
                },
            ])
            return
        }
        if (category == Category.Communication) {
            _setJobOffers([
                {
                    id: v4(),
                    title: "Développeur Full-Stack",
                    image_url: "",
                    company_name: "MongolianDev",
                    company_logo_url: "",
                    city_name: "Paris",
                    created_while: "Il y a 12 mois",
                    source_url: "",
                    source_data: SourceSite.Ftapi,
                },
            ])
            return
        }

        _setJobOffers([])
    }

    return {
        getJobOffers,
        setJobOffers,
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
