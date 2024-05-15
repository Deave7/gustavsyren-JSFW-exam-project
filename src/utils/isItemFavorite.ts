import { globalState, Book, Author } from "../types/types";


const isItemFavorite = (state: globalState, item: Book | Author): boolean => {
  if ("author_name" in item) {
    return state.user.favoriteBooks.some(
      (favoriteItem) => favoriteItem._version_ === item._version_
    );
  } else {
    return state.user.favoriteAuthors.some(
      (favoriteItem) => favoriteItem._version_ === item._version_
    );
  }
};

export default isItemFavorite;
