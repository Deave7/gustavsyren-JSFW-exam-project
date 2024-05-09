import { Action, User, globalState } from "../types/types";

const globalReducer = (state: globalState, action: Action): globalState => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return { ...state, docs: action.payload };
    case "SAVE_FAVORITE": {
      const newFavorite = action.payload;
      const updatedUser: User = {
        ...state.user,
        favoriteBooks: [...state.user.favoriteBooks, newFavorite],
      };
      return { ...state, user: updatedUser };
    }
    case "SAVE_READ": {
      const newRead = action.payload;
      const updatedUser: User = {
        ...state.user,
        readBooks: [...state.user.readBooks, newRead],
      };
      return { ...state, user: updatedUser };
    }
    case "DELETE_FAVORITE":
      return {
        ...state,
        user: {
          ...state.user,
          favoriteBooks: state.user.favoriteBooks.filter(
            (book) => book.title !== action.payload.title
          ),
        },
      };
    case "DELETE_READ":
      return {
        ...state,
        user: {
          ...state.user,
          readBooks: state.user.readBooks.filter(
            (book) => book.title !== action.payload.title
          ),
        },
      };
    case "SAVE_REVIEW":
      return {
        ...state,
        user: {
          ...state.user,
          reviews: [...state.user.reviews, action.payload],
        },
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        user: {
          ...state.user,
          reviews: state.user.reviews.filter(
            (review) => review._version_ !== action.payload._version_
          ),
        },
      };

    default:
      throw new Error("Wrong action type");
  }
};

export default globalReducer;
