import { useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [isToggled, setToggle] = useState(initialState);

    const toggle = () => {
        setToggle(!isToggled);
    };

    return [isToggled, toggle];
};

export default useToggle;