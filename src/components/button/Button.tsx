import useToggle from "../../custom-hooks/useToggle"

type ButtonProps = {
    label?: string;
    className: string;
    onClick: () => void;
    toggleAble?: boolean;
    checkFavorite?: () => boolean;
    checkRead?: () => boolean; 
}


const Button: React.FC<ButtonProps> = ({ label, onClick, className, toggleAble, checkFavorite, checkRead }) => {
    const [isToggled, toggle] = useToggle(false, checkFavorite, checkRead)
    
    const handleClick = () => {
        toggle();
        onClick()
    }

    const handleClickOrToggle = toggleAble ? handleClick : onClick;

    return ( 
        <button 
        onClick={handleClickOrToggle}
        className={`${className} ${toggleAble && isToggled ? 'toggled' : ''}`}>
        {label}
        </button>
     );
}

export default Button;