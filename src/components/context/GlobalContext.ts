import { createContext } from "react"
import { Action } from "../provider/ContextProvider";
export type Book = {
    author_name: string[];
    title: string;
    cover_i: number;
    first_publish_year: number;
    publisher: string;
    first_sentence: string;
    key: string;
    _version_: number
}

export type User = {
    favoriteBooks: Book[]
    readBooks: Book[]
    reviews: Review[]
}

export type globalState = {
    docs: Book[]
    user: User
}

export type Review = {
    scoreValue: string,
    numPageValue: string,
    review: string,
    _version_: number
}

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