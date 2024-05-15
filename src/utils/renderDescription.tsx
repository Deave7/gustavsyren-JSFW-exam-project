import { itemDetails } from "../types/types";

function renderDescription(itemDetails: itemDetails) {
  return (
    <p>
      {itemDetails &&
      typeof itemDetails.description === "object" &&
      itemDetails.description
        ? itemDetails.description.value
        : itemDetails && typeof itemDetails.description === "string"
        ? itemDetails.description
        : "No description available"}
    </p>
  );
}

export default renderDescription;
