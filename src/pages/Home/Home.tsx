import { useState } from "react";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";
import useFetch from "../../custom-hooks/useFetch";
import Button from "../../components/button/Button";

import useSeachResult from "../../custom-hooks/useSearchResult";

const Home = () => {
  
  const [inputValue, setInputValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('')
  
  
  const { data } = useFetch(searchValue, 'https://openlibrary.org/search.json?q=', '&limit=10' )
  useSeachResult(data);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue(`${inputValue}`)
  }
  
  
  
  return (
    <div className="home">
      <div className="input-button-container">
      <Input input={"text"} value={inputValue} onChange={handleChange} placeholder="Search..." className={"input"}/>
      <Button className={"button search"} onClick={handleClick} label="Submit"></Button>
      </div>
      <div>
        <CardList label={"Search Results:"} height={"70rem"} width={'40rem'}/>
      </div>
    </div>
  );
};

export default Home;
