import { createContext } from "react"
type Book = {
    author: string;
    genre: string;
    title: string;
}

type globalState = {
    books: Book[]
}


export const initialGlobalState: globalState = {
    books: []
}


export const GlobalContext = createContext<{
    state: globalState
}>({
    state: initialGlobalState
})