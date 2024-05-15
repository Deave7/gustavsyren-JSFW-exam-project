import { useContext } from "react";
import Button from "../../components/button/Button";
import CardList from "../../components/cardList/CardList";
import { GlobalContext } from "../../components/context/GlobalContext";
import useCategoryToggle from "../../custom-hooks/useCategoryToggle";

const User = () => {
  const { state } = useContext(GlobalContext);
  const {
    category,
    handleCategoryOneClick,
    handleCategoryTwoClick,
    handleCategoryThreeClick,
  } = useCategoryToggle("favorite-books", "read-books", "favorite-authors");

  const totalPagesRead = state.user.reviews.reduce((total, review) => {
    return total + parseInt(review.numPageValue);
  }, 0);

  return (
    <div className="user">
      <div className="details">
        <div>
          <h2>User statistics:</h2>
        </div>
        <div className="list-container">
          <ul>
            <li>
              <span>Books read:</span> <br /> {state.user.readBooks.length}
            </li>
            <li>
              <span>Number of favorite books:</span> <br />{" "}
              {state.user.favoriteBooks.length}
            </li>
            <li>
              <span>Pages read:</span> <br /> {totalPagesRead}
            </li>
          </ul>
        </div>
      </div>
      <div className="button-container">
        {category === "favorite-books" && (
          <Button
            className={"button user-b"}
            onClick={handleCategoryOneClick}
            label="Toggle Category"
          ></Button>
        )}
        {category === "read-books" && (
          <Button
            className={"button user-b"}
            onClick={handleCategoryTwoClick}
            label="Toggle Category"
          ></Button>
        )}{" "}
        {category === "favorite-authors" && (
          <Button
            className={"button user-b"}
            onClick={handleCategoryThreeClick}
            label="Toggle Category"
          ></Button>
        )}
      </div>
      <CardList
        label={
          category === "favorite-books"
            ? "Favorite Books:"
            : category === "read-books"
            ? "Read Books:"
            : category === "favorite-authors"
            ? "Favorite Authors:"
            : ""
        }
        height={"50rem"}
        width={"40rem"}
      />
    </div>
  );
};

export default User;
