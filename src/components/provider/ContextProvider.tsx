import { useReducer } from "react"
import { Book, GlobalContext, Review, User, globalState, initialGlobalState } from "../context/GlobalContext"

export type Action = 
| {type: 'SAVE_SEARCH'; payload: Book[] }
| {type: 'SAVE_FAVORITE'; payload: Book}
| {type: 'SAVE_READ'; payload: Book}
| {type: 'DELETE_FAVORITE'; payload: Book}
| {type: 'DELETE_READ'; payload: Book}
| {type: 'SAVE_REVIEW'; payload: Review}
| {type: 'DELETE_REVIEW'; payload: Book}

const globalReducer = (state: globalState, action: Action): globalState => {
    switch(action.type) {
        case 'SAVE_SEARCH':
            return {...state, docs: action.payload}
        case 'SAVE_FAVORITE': {
            const newFavorite = action.payload;
            const updatedUser: User = {
                ...state.user,
                favoriteBooks: [...state.user.favoriteBooks, newFavorite]
            };
            return { ...state, user: updatedUser };
        }
        case 'SAVE_READ': {
            const newRead = action.payload;
            const updatedUser: User = {
                ...state.user,
                readBooks: [...state.user.readBooks, newRead]
            }
            return {...state, user: updatedUser}
        }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                user: {
                   ...state.user, 
                   favoriteBooks: state.user.favoriteBooks.filter((book) => book.title !== action.payload.title)
                }
            }
        case 'DELETE_READ':
            return {
                ...state,
                user: {
                    ...state.user,
                    readBooks: state.user.readBooks.filter((book) => book.title !== action.payload.title )
                }
            }
        case 'SAVE_REVIEW':
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: [...state.user.reviews, action.payload]
                }
            }
        case 'DELETE_REVIEW': 
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: state.user.reviews.filter((review) => review._version_ !== action.payload._version_)
                }
            }


        default:
            throw new Error('Wrong action type')
    }
}


type GlobalProviderProps = {
    children: React.ReactNode
}

function GlobalProvider( {children}: GlobalProviderProps) {
    const [state, dispatch] = useReducer(globalReducer, initialGlobalState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;