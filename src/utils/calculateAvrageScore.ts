import { Review } from "../types/types";

const calculateAverage = (reviews: Review[], type: keyof Review) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((total, review) => {
    return total + parseInt(review[type] as string, 10);
  }, 0);

  return sum / reviews.length;
};

export default calculateAverage;
