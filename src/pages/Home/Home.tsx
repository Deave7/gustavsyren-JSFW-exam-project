import { ChangeEvent, useState } from "react";
import Input from "../../components/input/Input";

const Home = () => {
    const [inputValue, setInputValue] = useState<string>('')
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }


    return (
        <>
        <Input input={"text"} value={inputValue} onChange={handleChange} placeholder="Search..."/>
        </>
    )
}

export default Home;