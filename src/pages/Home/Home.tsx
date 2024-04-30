import { useState } from "react";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="home">
      <Input input={"text"} value={inputValue} onChange={handleChange} placeholder="Search..."/>
      <div>
        <CardList label={"Search Results:"} height={"70rem"} width={'40rem'}/>
      </div>
    </div>
  );
};

export default Home;
