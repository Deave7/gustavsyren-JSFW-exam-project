import { Author, Book, itemDetails } from "../types/types";

function renderDescription(item: Book | Author, itemDetails: itemDetails) {
  if (itemDetails) {
    if ('author_name' in item) {
      const description = typeof itemDetails.description === 'string' ? itemDetails.description : itemDetails.description?.value;
      return (
        <p>
          {description ? description : 'Not available'}
        </p>
      );
    }
    else {
      const bio = typeof itemDetails.bio === 'string' ? itemDetails.bio : itemDetails.bio?.value;
      return (
        <p>
          {bio ? bio : 'Not avaliable'}
        </p>
      )
    }
  }
}

export default renderDescription;
