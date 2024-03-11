import { SourceSite } from "@src/domain/entities/enums/sourceSite"
import { JobOffer } from "@src/domain/entities/jobOffer"
import { useState } from "react"
import { v4 } from "uuid"
import { Category } from "./useSelectCategory.hook"

export const useGetJobOffers = () => {
    const [jobOffers, _setJobOffers] = useState<JobOffer[] | null>()

    async function setJobOffers(category: Category): Promise<void> {
        _setJobOffers(null)

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
        jobOffers,
        setJobOffers,
    }
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
