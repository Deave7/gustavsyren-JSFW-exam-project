import { useContext, useEffect } from "react"
import { Book, GlobalContext } from "../components/context/GlobalContext"

const useSeachResult = (data: Book[]) => {
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        if (data) {
            dispatch({type: 'SAVE_SEARCH', payload: data})
            console.log(data)
        }

    }, [data, dispatch])
}

export default useSeachResult;