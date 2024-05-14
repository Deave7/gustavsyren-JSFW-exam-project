import { useState } from "react"

const useCategoryToggle = (categoryOne: string, categoryTwo: string) => {
    const [category, setCategory] = useState(categoryOne)

    const handleCategoryOneClick = () => {
        setCategory(categoryTwo)
    }

    const handleCategoryTwoClick = () => {
        setCategory(categoryOne)
    }

    return { category, handleCategoryOneClick, handleCategoryTwoClick}
}

export default useCategoryToggle