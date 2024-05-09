import { createContext } from "react"
import { Action } from "../provider/ContextProvider";
import { globalState } from "../../types/types";

export const initialGlobalState: globalState = {
    docs: [],
    user: {
        favoriteBooks: [],
        readBooks: [],
        reviews: []
    }
}

export const GlobalContext = createContext<{
    state: globalState
    dispatch: React.Dispatch<Action>
}>({
    state: initialGlobalState,
    dispatch: () => null,
})