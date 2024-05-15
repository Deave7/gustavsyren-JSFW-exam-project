import { Author, Book, globalState } from "../types/types";

function findItem(state: globalState, parsedVersion: number): Book | Author | undefined {
  
  const itemInDocs = state.docs.find(
    (item: Book | Author) => item._version_ === parsedVersion
  );
  if (itemInDocs) return itemInDocs;

  const bookInFavorites = state.user.favoriteBooks.find(
    (book: Book) => book._version_ === parsedVersion
  );
  if (bookInFavorites) return bookInFavorites;

  const bookInRead = state.user.readBooks.find(
    (book: Book) => book._version_ === parsedVersion
  );
  if (bookInRead) return bookInRead;

  return undefined;
}

export default findItem
