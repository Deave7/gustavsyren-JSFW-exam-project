import { createContext } from "react"
import { Action } from "../provider/ContextProvider";
export type Book = {
    author_name: string[];
    subject_facet: string[];
    title: string;
    cover_i: number;
}

export type globalState = {
    docs: Book[]

}


export const initialGlobalState: globalState = {
    docs: []
}


export const GlobalContext = createContext<{
    state: globalState
    dispatch: React.Dispatch<Action>
}>({
    state: initialGlobalState,
    dispatch: () => null,
})