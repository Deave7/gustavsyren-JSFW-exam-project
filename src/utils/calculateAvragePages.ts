import { Review } from "../types/types";

const calculateAvragePages = (reviews: Review[]) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => {
    return total + parseInt(review.numPageValue, 10);
  }, 0);

  return sum / reviews.length;
};

export default calculateAvragePages;
