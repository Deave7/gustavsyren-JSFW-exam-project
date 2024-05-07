import { useContext } from "react";
import Card from "../card/Card"
import { GlobalContext } from "../context/GlobalContext";
import { Link, useLocation } from "react-router-dom";

type CardListProps = {
    label: string
    height: string;
    width: string;
}

const CardList: React.FC<CardListProps> = ({ label, height, width }) => {
  const { state } = useContext(GlobalContext);
  const location = useLocation();
  console.log(state);

  return (
    <div
      className="card-list"
      style={{ height: `${height}`, width: `${width}` }}>
      <h2>{label}</h2>
      <div className="card-container">
        {location.pathname === "/home"
          ? state.docs.map((book, index) => (
              <Link to={`/shelf/${index}`} key={index}>
                <Card title={book.title} author={book.author_name[0]} coverId={book.cover_i}/>
              </Link>
            ))
          : location.pathname === "/user" &&
            state.user.favoriteBooks.map((book, index) => {
              const docsIndex = state.docs.findIndex((doc) => doc.key === book.key)
              return (
                <Link to={`/shelf/${docsIndex}`} key={index}>
                  <Card title={book.title} author={book.author_name[0]} coverId={book.cover_i}/>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CardList;