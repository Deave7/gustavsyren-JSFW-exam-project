import { Book, globalState } from "../types/types";

function findBook(state: globalState, parsedVersion: number): Book | undefined {
  const bookInDocs = state.docs.find(
    (book: Book) => book._version_ === parsedVersion
  );
  if (bookInDocs) return bookInDocs;

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

export default findBook;
