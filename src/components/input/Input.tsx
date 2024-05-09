import { InputProps } from "../../types/types";

const Input: React.FC<InputProps> = ({
  input,
  value,
  onChange,
  placeholder,
  className,
  minValue,
  maxValue,
  name,
}) => {
  return (
    <input
      className={`${className}`}
      type={input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      name={name}
    />
  );
};

export default Input;
