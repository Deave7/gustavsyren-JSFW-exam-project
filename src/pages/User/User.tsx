import { useContext } from "react";
import Button from "../../components/button/Button";
import CardList from "../../components/cardList/CardList";
import { GlobalContext } from "../../components/context/GlobalContext";
import useCategoryToggle from "../../custom-hooks/useCategoryToggle";

const User = () => {
  const { state } = useContext(GlobalContext);
  const { category, handleCategoryOneClick, handleCategoryTwoClick } = useCategoryToggle('favorites', 'read')
 
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
              <span>Number of favorites:</span> <br />{" "}
              {state.user.favoriteBooks.length}
            </li>
            <li>
              <span>Pages read:</span> <br /> {totalPagesRead}
            </li>
          </ul>
        </div>
      </div>
      <div className="button-container">
        {category === "read" ? (
          <Button
            className={"button user-b"}
            onClick={handleCategoryTwoClick}
            label="Toggle Category"
          ></Button>
        ) : (
          <Button
            className={"button user-b"}
            onClick={handleCategoryOneClick}
            label="Toggle Category"
          ></Button>
        )}
      </div>
      <CardList
        label={category === "favorites" ? "Favorites" : "Read"}
        height={"50rem"}
        width={"40rem"}
      />
    </div>
  );
};

export default User;
