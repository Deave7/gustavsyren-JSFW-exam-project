import { useContext, useEffect } from "react"
import {  GlobalContext } from "../components/context/GlobalContext"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSeachResult = (data: any) => {
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        if (data) {
            dispatch({type: 'SAVE_SEARCH', payload: data.docs})
            console.log(data)
        }

    }, [data, dispatch])
}

export default useSeachResult;