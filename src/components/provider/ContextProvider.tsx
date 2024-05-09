import { useReducer } from "react"
import { GlobalContext, initialGlobalState } from "../context/GlobalContext"
import { GlobalProviderProps } from "../../types/types";
import globalReducer from "../../utils/globalReducer";



function GlobalProvider( {children}: GlobalProviderProps) {
    const [state, dispatch] = useReducer(globalReducer, initialGlobalState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;