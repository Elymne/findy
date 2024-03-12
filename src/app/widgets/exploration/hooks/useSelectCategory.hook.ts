import { useState } from "react"

export const useSelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>()

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
