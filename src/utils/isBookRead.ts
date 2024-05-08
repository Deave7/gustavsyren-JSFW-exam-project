import { Book, globalState } from "../components/context/GlobalContext";

const isBookRead = (state: globalState, book: Book): boolean => {
    return state.user.readBooks.some(readBook => readBook._version_ === book._version_)
}

export default isBookRead;