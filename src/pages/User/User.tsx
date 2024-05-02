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
            <div className="details">
                <h2>User statistics:</h2>
                <ul>
                    <li>Books read:</li>
                    <li>Number of favorites:</li>
                    <li>Favorite genre:</li>
                </ul>
            </div>
            <CardList label={"Favorites"} height={"50rem"} width={"40rem"}/>
        </div>
    )
}

export default User;