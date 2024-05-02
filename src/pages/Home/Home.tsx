import { useState } from "react";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";
import useFetch from "../../custom-hooks/useFetch";

const Home = () => {
  const url = 'https://openlibrary.org/search.json?q='
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const { data } = useFetch(`${url}${inputValue}`)
  console.log(data)
  

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
