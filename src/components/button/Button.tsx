type ButtonProps = {
    label?: string
    className: string
    onClick: () => void
}


const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return ( 
        <button 
        onClick={onClick}
        className={className}>
        {label}
        </button>
     );
}

export default Button;