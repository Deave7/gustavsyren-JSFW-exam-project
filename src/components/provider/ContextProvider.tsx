import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

type GlobalProviderProps = {
    children: React.ReactNode
}

function GlobalProvider( {children}: GlobalProviderProps) {
    const { state } = useContext(GlobalContext)

    return (
        <GlobalContext.Provider value={{ state }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;