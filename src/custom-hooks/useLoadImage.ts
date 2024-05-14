import { useState } from "react"

const useLoadImage = (src: string, onLoad: () => void, onError: () => void, timeOut: number) => {
    const image = new Image()
    const [loaded, setLoaded] = useState(false)

    const handleLoad = () => {
        if (!loaded) {
            setLoaded(true)
            onLoad()
        }
    }

    const handleError = () => {
        if (!loaded) {
            setLoaded(true)
            onError()
        }
    }

    image.onload = handleLoad
    image.onerror = handleError
    image.src = src

    setTimeout(() => {
        if (!loaded) {
            setLoaded(true)
            onError();
        }
    }, timeOut)

}

export default useLoadImage