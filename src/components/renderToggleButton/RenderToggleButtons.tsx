import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Author, Book } from "../../types/types";
import Button from "../button/Button";
import isBookFavorite from "../../utils/isBookFavorite";
import isBookRead from "../../utils/isBookRead";

type RenderToggleButtonsProps = {
  item: Book | Author;
  setModal: React.Dispatch<React.SetStateAction<boolean>>
};

const RenderToggleButtons: React.FC<RenderToggleButtonsProps> = ({ item, setModal }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GlobalContext);
  const isAuthor = (item as Author).name !== undefined;

  if (item) {
  
    const handleClick = () => {
      navigate(-1);
    };
  
    const handleToggleClick = (label: string) => {
      if (!item || isAuthor) return;
  
      switch (label) {
        case "favorite":
          if (isBookFavorite(state, item as Book)) {
            dispatch({ type: "DELETE_BOOK", payload: { book: item as Book, type: 'favoriteBooks' } });
          } else {
            dispatch({ type: "SAVE_BOOK", payload: { book: item as Book, type: 'favoriteBooks' } });
          }
          break;
        case "read":
          if (isBookRead(state, item as Book)) {
            dispatch({ type: "DELETE_BOOK", payload: { book: item as Book, type: 'readBooks' } });
            dispatch({ type: "DELETE_REVIEW", payload: item as Book });
          } else {
            dispatch({ type: "SAVE_BOOK", payload: { book: item as Book, type: 'readBooks' }});
            setModal(true)
          }
      }
    };
  
    return (
      <div className="render-toggle-button-container">
        <Button
          className={"button toggle"}
          onClick={handleClick}
          label="Close"
        />
        <Button
          className={"button toggle"}
          onClick={() => handleToggleClick("read")}
          label="Read"
          toggleAble={true}
          checkRead={() => isBookRead(state, item as Book)}
        />
        <Button
          className={"button toggle"}
          onClick={() => handleToggleClick("favorite")}
          label="Favorite"
          toggleAble={true}
          checkFavorite={() => isBookFavorite(state, item as Book)}
        />
      </div>
    );

  }
};

export default RenderToggleButtons;