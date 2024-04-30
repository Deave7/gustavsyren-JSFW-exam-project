import { useState } from "react";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";

const User = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value);
      };

    return (
        <div className="user">
            <Input input={"text"} value={inputValue} onChange={handleChange} placeholder="Search..."/>
            <CardList label={"Favorites"} height={"50rem"} width={"40rem"}/>
        </div>
    )
}

export default User;