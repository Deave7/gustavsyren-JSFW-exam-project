import { ChangeEvent } from "react";

type InputProps = {
    input: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
}


const Input: React.FC<InputProps> = ({input, value, onChange, placeholder}) => {
    return (
        <input className="input"
        type={input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}/>
    )
}

export default Input;