import { createContext } from "react";
import { Action, globalState } from "../../types/types";

export const initialGlobalState: globalState = {
  docs: [],
  user: {
    favoriteBooks: [],
    readBooks: [],
    reviews: [],
    favoriteAuthors: []
  },
};

export const GlobalContext = createContext<{
  state: globalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialGlobalState,
  dispatch: () => null,
});
