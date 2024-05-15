import { Author, Book, itemDetails } from "../types/types";

function renderDetails(item: Book | Author, itemDetails: itemDetails ) {
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
          {itemDetails.subjects  ? itemDetails.subjects[0] : "No subject available"}
        </li>
      </ul>
    );
  }
  else {
    const author = item as Author
    if (itemDetails) {
      return (
        <ul>
        <li>
          <span>Name:</span> {author.name}
        </li>
        <li>
          <span>Top Work:</span> {author.top_work}
        </li>
          <li>
            <span>Born:</span> {itemDetails.birth_date ? itemDetails.birth_date : 'Not avaliable'}
          </li>
       
          <li>
            <span>Died:</span> {itemDetails.death_date ? itemDetails.death_date: 'Not avaliable'}
          </li>
        
      </ul>
      )
    }
  }
}

export default renderDetails;
