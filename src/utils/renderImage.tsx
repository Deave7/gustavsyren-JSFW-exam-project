import { Author, Book, itemDetails } from "../types/types";
import placeholderImage from '/avatar_author-lg.png'

function renderImage(item: Book | Author, itemDetails: itemDetails) {
  if ("author_name" in item) {
    const book = item as Book;
    return (
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt="cover art"
        height={160}
      />
    );
  } else {
    if (itemDetails && itemDetails.photos && itemDetails.photos.length > 0) {
      return (
        <img
          src={`https://covers.openlibrary.org/a/id/${itemDetails.photos[0]}-M.jpg`}
          alt="cover art"
          height={160}
        />
      );
    } else {
      return (
        <img
          src={placeholderImage}
          alt="cover art"
          height={160}
        />
      );
    }
  }
}

export default renderImage