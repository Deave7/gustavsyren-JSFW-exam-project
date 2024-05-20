import { Review } from "../types/types"

const calculatePagesRead = (reviews: Review[]) => {
    if(reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => {
        return total + parseInt(review.numPageValue, 10);
    }, 0)

    return sum
}

export default calculatePagesRead;