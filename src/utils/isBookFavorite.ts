import { Book, globalState } from "../components/context/GlobalContext"

const isBookFavorite = (state: globalState, book: Book): boolean => {
    return state.user.favoriteBooks.some(favoriteBook => favoriteBook._version_ === book._version_ )
}

export default isBookFavorite;