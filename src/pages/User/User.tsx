import { useState } from "react";
import Button from "../../components/button/Button";
import CardList from "../../components/cardList/CardList";

const User = () => {
  const [tab, setTab] = useState<"favorites" | "read">("favorites");

  const handleFavoriteClick = () => {
    setTab("favorites");
  };

  const handleReadClick = () => {
    setTab("read");
  };

  return (
    <div className="user">
      <div className="details">
        <h2>User statistics:</h2>
        <ul>
          <li>Books read:</li>
          <li>Number of favorites:</li>
          <li>Favorite genre:</li>
        </ul>
      </div>
      <div className="button-container">
        <h2>Toggle Category</h2>
        {tab === "read" ? (
          <Button
            className={"button user-b"}
            onClick={() => handleFavoriteClick()}
            label="Favorite Books"
          ></Button>
        ) : (
          <Button
            className={"button user-b"}
            onClick={() => handleReadClick()}
            label="Read Books"
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
