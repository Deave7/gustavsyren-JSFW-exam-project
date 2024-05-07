import { useState } from "react"

const useToggle = () => {
    const [isToggled, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!isToggled)
    }
    
    return [isToggled, handleToggle]
}

export default useToggle;