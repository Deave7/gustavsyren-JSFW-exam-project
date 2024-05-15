import { Action, User, globalState } from "../types/types";

const globalReducer = (state: globalState, action: Action): globalState => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return { ...state, docs: action.payload };
    case "SAVE_BOOK": {
      const {book, type} = action.payload;
      const updatedUser: User = {
        ...state.user,
        [type]: [...state.user[type], book],
      };
      return { ...state, user: updatedUser };
    }
    case "DELETE_BOOK": {
      const { type } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          [type]: state.user[type].filter(
            (book) => book.title !== action.payload.book.title
          ),
        },
      };
    }
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

    case "RESET":
      return {
        docs: [],
        user: {
          favoriteBooks: [],
          readBooks: [],
          reviews: [],
        },
      };

    default:
      throw new Error("Wrong action type");
  }
};

export default globalReducer;
