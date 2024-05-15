import { Author, Book } from "../types/types";

function renderDetails(item: Book | Author, itemDetails: any ) {
  if ('author_name' in item) {
    const book = item as Book
      return (
      <ul>
        <li>
          <span>Title:</span> {book.title}
        </li>
        <li>
          <span>Author:</span> {book.author_name[0]}
        </li>
        <li>
          <span>Release:</span> {book.first_publish_year}
        </li>
        <li>
          <span>Publisher:</span> {book.publisher[0]}
        </li>
        <li>
          <span>Subject:</span>{" "}
          {itemDetails ? itemDetails.subjects[0] : "No subject available"}
        </li>
      </ul>
    );
  }
  else {
    const author = item as Author
    return (
        <ul>
        <li>
          <span>Name:</span> {author.name}
        </li>
        <li>
          <span>Top Work:</span> {author.top_work}
        </li>
      </ul>
    )
  }
}

export default renderDetails;
