import { useState } from "react"
import { JobOfferCategory } from "./enums/jobOfferCategory.enum"

export const useSelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState<JobOfferCategory>()

    function getCategories(): JobOfferCategory[] {
        return [
            JobOfferCategory.Marketing,
            JobOfferCategory.Communication,
            JobOfferCategory.Comptability,
            JobOfferCategory.HumanResources,
            JobOfferCategory.WebDevelop,
            JobOfferCategory.Commercial,
        ]
    }

    function getCategoryName(category: JobOfferCategory): string {
        switch (category) {
            case JobOfferCategory.Marketing:
                return "Marketing"
            case JobOfferCategory.Communication:
                return "Communication"
            case JobOfferCategory.Comptability:
                return "Comptabilité"
            case JobOfferCategory.HumanResources:
                return "Ressources Humaines"
            case JobOfferCategory.WebDevelop:
                return "Développement Web"
            case JobOfferCategory.Commercial:
                return "Commercial"
        }
    }

    return {
        selectedCategory,
        setSelectedCategory,
        getCategories,
        getCategoryName,
    }
}
