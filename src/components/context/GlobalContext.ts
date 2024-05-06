import { createContext } from "react"
import { Action } from "../provider/ContextProvider";
export type Book = {
    author: string;
    genre: string;
    title: string;
}

export type globalState = {
    books: Book[]

}


export const initialGlobalState: globalState = {
    books: []
}


export const GlobalContext = createContext<{
    state: globalState
    dispatch: React.Dispatch<Action>
}>({
    state: initialGlobalState,
    dispatch: () => null,
})