import { Author, Book } from "../types/types";
import placeholderImage from '/avatar_author-lg.png'

function renderImage(item: Book | Author, data: any) {
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
    if (data && data.photos && data.photos.length > 0) {
      return (
        <img
          src={`https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`}
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