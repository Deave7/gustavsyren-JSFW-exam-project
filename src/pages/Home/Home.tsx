import { useState } from "react";
import Input from "../../components/input/Input";
import CardList from "../../components/cardList/CardList";
import useFetch from "../../custom-hooks/useFetch";
import Button from "../../components/button/Button";
import useSeachResult from "../../custom-hooks/useSearchResult";
import useCategoryToggle from "../../custom-hooks/useCategoryToggle";

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { category, handleCategoryOneClick, handleCategoryTwoClick} = useCategoryToggle('book', 'author')
  const searchBookUrl: string = 'https://openlibrary.org/search.json?q='
  const searchAuthorUrl: string = 'https://openlibrary.org/search/authors.json?q='
  const currentSearchCategory = category === "book" ? searchBookUrl : searchAuthorUrl
  const { data, loading } = useFetch(
    searchValue,
    currentSearchCategory,
    "&limit=10"
  );
  useSeachResult(submitted ? data : null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue(`${inputValue}`);
    setSubmitted(true);
  };

  return (
    <div className="home">
      <div className="input-button-container">
        <Input
          input={"text"}
          value={inputValue}
          onChange={handleChange}
          placeholder={`Search ${category}s...`}
          className={"input"}
        />
        <Button
          className={"button search"}
          onClick={handleClick}
          label="Submit"
        ></Button>
      </div>
      <div className="category-button-container">
      {category === "book" ? (
          <Button
          className={"button user-b"}
          onClick={handleCategoryOneClick}
          label="Toggle Search Category"
        ></Button>
        ) : (
          
          <Button
            className={"button user-b"}
            onClick={handleCategoryTwoClick}
            label="Toggle Search Category"
          ></Button>
        )}
      </div>
      <div>
        <CardList label={"Search Results:"} height={"70rem"} width={"40rem"} loading={loading}/>
      </div>
    </div>
  );
};

export default Home;
