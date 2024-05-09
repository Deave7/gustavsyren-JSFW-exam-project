import { useContext, useState } from "react";
import Button from "../../components/button/Button";
import CardList from "../../components/cardList/CardList";
import { GlobalContext } from "../../components/context/GlobalContext";

const User = () => {
    const { state } = useContext(GlobalContext)
  const [tab, setTab] = useState<"favorites" | "read">("favorites");

  const handleFavoriteClick = () => {
    setTab("favorites");
  };

  const handleReadClick = () => {
    setTab("read");
  };

  const totalPagesRead = state.user.reviews.reduce((total, review) => {
    return total + parseInt(review.numPageValue,)
  }, 0)

  return (
    <div className="user">
      <div className="details">
        <div>
            <h2>User statistics:</h2>
        </div>
        <div className="list-container">
            <ul>
            <li><span>Books read:</span> <br /> {state.user.readBooks.length}</li>
            <li><span>Number of favorites:</span> <br /> {state.user.favoriteBooks.length}</li>
            <li><span>Pages read:</span> <br /> {totalPagesRead}</li>
         </ul>
        </div>
      </div>
      <div className="button-container">
        {tab === "read" ? (
          <Button
            className={"button user-b"}
            onClick={() => handleFavoriteClick()}
            label="Toggle Category"
          ></Button>
        ) : (
          <Button
            className={"button user-b"}
            onClick={() => handleReadClick()}
            label="Toggle Category"
          ></Button>
        )}
      </div>
      <CardList
        label={tab === "favorites" ? "Favorites" : "Read"}
        height={"50rem"}
        width={"40rem"}
      />
    </div>
  );
};

export default User;
