import { useState } from "react"
import { JobOfferCategory } from "./enums/jobOfferCategory.enum"

export const useSelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState<JobOfferCategory>()

    return {
        selectedCategory,
        setSelectedCategory,
    }
}
