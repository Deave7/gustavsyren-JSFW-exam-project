import { Action, User, globalState } from "../types/types";

const globalReducer = (state: globalState, action: Action): globalState => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return { ...state, docs: action.payload };
    case "SAVE_ITEM": {
      const { item, type: itemType} = action.payload;
      const updatedUser: User = {
        ...state.user,
        [itemType]: [...state.user[itemType], item],
        
      };
      return { ...state, user: updatedUser};
    }
    case "DELETE_ITEM": {
      const { type: ItemType } = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          [ItemType]: state.user[ItemType].filter(
            (item) => item._version_ !== action.payload.item._version_
          ),
        },
      };
    }
    case "RESET":
      return {
        docs: [],
        user: {
          favoriteBooks: [],
          readBooks: [],
          reviews: [],
          favoriteAuthors: [],
        },
      };

    default:
      throw new Error("Wrong action type");
  }
};

export default globalReducer;
