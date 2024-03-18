import { JobOfferCategory } from "@src/domain/entities/enums/jobOfferCategory"

export const categories = [
    JobOfferCategory.Marketing,
    JobOfferCategory.Communication,
    JobOfferCategory.Comptability,
    JobOfferCategory.HumanResources,
    JobOfferCategory.WebDevelop,
    JobOfferCategory.Commercial,
]

export function getCategoryName(category: JobOfferCategory): string {
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
