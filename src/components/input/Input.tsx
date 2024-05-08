import { ChangeEvent } from "react";

type InputProps = {
    input: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    className: string
    minValue?: number;
    maxValue?: number;
}


const Input: React.FC<InputProps> = ({input, value, onChange, placeholder, className, minValue, maxValue}) => {
    return (
        <input className={`${className}`}
        type={input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={minValue}
        max={maxValue}/>
    )
}

export default Input;