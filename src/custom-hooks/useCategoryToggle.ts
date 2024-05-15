import {  useState } from "react"

const useCategoryToggle = (categoryOne: string, categoryTwo: string, categoryThree?: string) => {
    const [category, setCategory] = useState(categoryOne)

    const handleCategoryOneClick = () => {
        setCategory(categoryTwo)
    }

    const handleCategoryTwoClick = () => {
        setCategory(categoryThree ? categoryThree : categoryOne);
    };


    const handleCategoryThreeClick = () => {
            setCategory(categoryOne)
    }

    return { category, handleCategoryOneClick, handleCategoryTwoClick, handleCategoryThreeClick}
}

export default useCategoryToggle