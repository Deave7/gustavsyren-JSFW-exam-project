import { Book, globalState } from "../components/context/GlobalContext";

function findBook(state: globalState, parsedVersion: number): Book | undefined  {

    const bookInDocs = state.docs.find(book => book._version_ === parsedVersion)
    if (bookInDocs) return bookInDocs

    const bookInFavorites = state.user.favoriteBooks.find(book => book._version_ === parsedVersion)
    if (bookInFavorites) return bookInFavorites

    const bookInRead = state.user.readBooks.find(book => book._version_ === parsedVersion)
    if (bookInRead) return bookInRead

    return undefined
}

export default findBook