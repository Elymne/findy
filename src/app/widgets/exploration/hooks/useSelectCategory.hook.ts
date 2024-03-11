import { useState } from "react"

export const useSelectCategory = (defaultCategory: Category) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)

    return {
        selectedCategory,
        setSelectedCategory,
    }
}

export enum Category {
    Marketing,
    Communication,
    Comptability,
    WebDevelop,
    HumanResources,
    Commercial,
}
