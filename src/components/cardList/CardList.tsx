import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {  useLocation } from "react-router-dom";
import { CardListProps } from "../../types/types";
import { LoaderCircle } from 'lucide-react';
import renderCard from "../../utils/renderCard";

const CardList: React.FC<CardListProps> = ({ label, height, width, loading }) => {
  const { state } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <div
      className="card-list"
      style={{ height: `${height}`, width: `${width}` }}
    >
      <h2>{label}</h2>
      {loading ? <LoaderCircle className="loader"/> : <div className="card-container">
        {location.pathname === "/home" &&
          state.docs.map((item, index) => (
            renderCard(item, index)
          ))}
        {location.pathname === "/user" &&
          label === "Favorites" &&
          state.user.favoriteBooks.map((book, index) => (
            renderCard(book, index)
          ))}
        {location.pathname === "/user" &&
          label === "Read" &&
          state.user.readBooks.map((book, index) => (
            renderCard(book, index)
          ))}
      </div>}
    </div>
  );
};

export default CardList;
