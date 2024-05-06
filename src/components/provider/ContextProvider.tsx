import { useReducer } from "react"
import { Book, GlobalContext, globalState, initialGlobalState } from "../context/GlobalContext"

export type Action = 
| {type: 'SAVE_SEARCH'; payload: Book[] }

const globalReducer = (state: globalState, action: Action): globalState => {
    switch(action.type) {
        case 'SAVE_SEARCH':
            return {...state, docs: action.payload}
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