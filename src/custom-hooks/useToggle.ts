import {  useEffect, useState } from "react";

type CheckFunction = () => boolean;

const useToggle = (initialState: boolean, checkFavorite?: CheckFunction, checkRead?: CheckFunction ): [boolean, () => void] => {
    const [isToggled, setToggle] = useState(initialState);

    useEffect(() => {
        if (checkFavorite && checkRead) {
          const isBookFavorite: boolean = checkFavorite();
          const isBookRead: boolean = checkRead();
          setToggle(isBookFavorite || isBookRead);
        } else if (checkFavorite) {
          const isBookFavorite: boolean = checkFavorite();
          setToggle(isBookFavorite);
        } else if (checkRead) {
          const isBookRead: boolean = checkRead();
          setToggle(isBookRead);
        }
      }, [checkFavorite, checkRead]);
    
    const toggle = () => {
        setToggle(!isToggled);
    };

    return [isToggled, toggle];
};

export default useToggle;