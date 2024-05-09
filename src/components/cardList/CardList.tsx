import { useContext } from "react";
import Card from "../card/Card";
import { GlobalContext } from "../context/GlobalContext";
import { Link, useLocation } from "react-router-dom";
import { CardListProps } from "../../types/types";

const CardList: React.FC<CardListProps> = ({ label, height, width }) => {
  const { state } = useContext(GlobalContext);
  const location = useLocation();
  console.log(state);

  return (
    <div
      className="card-list"
      style={{ height: `${height}`, width: `${width}` }}
    >
      <h2>{label}</h2>
      <div className="card-container">
        {location.pathname === "/home" &&
          state.docs.map((book, index) => (
            <Link to={`/shelf/${book._version_}`} key={index}>
              <Card
                title={book.title}
                author={book.author_name[0]}
                coverId={book.cover_i}
              />
            </Link>
          ))}
        {location.pathname === "/user" &&
          label === "Favorites" &&
          state.user.favoriteBooks.map((book, index) => (
            <Link to={`/shelf/${book._version_}`} key={index}>
              <Card
                title={book.title}
                author={book.author_name[0]}
                coverId={book.cover_i}
              />
            </Link>
          ))}
        {location.pathname === "/user" &&
          label === "Read" &&
          state.user.readBooks.map((book, index) => (
            <Link to={`/shelf/${book._version_}`} key={index}>
              <Card
                title={book.title}
                author={book.author_name[0]}
                coverId={book.cover_i}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CardList;
