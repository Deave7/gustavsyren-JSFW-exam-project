import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { Author, Book } from "../../types/types";
import Button from "../button/Button";
import isBookRead from "../../utils/isBookRead";
import isItemFavorite from "../../utils/isItemFavorite";

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
      if (isAuthor) {
        if (label === 'favorite') {
          if(isItemFavorite(state, item)) {
            dispatch({ type: 'DELETE_ITEM', payload: { item: item, type: 'favoriteAuthors'}})
          } else {
            dispatch({ type: 'SAVE_ITEM', payload: {item: item, type: 'favoriteAuthors'}})
          }
        }
      }
      else {
        switch (label) {
          case "favorite":
            if (isItemFavorite(state, item)) {
              dispatch({ type: "DELETE_ITEM", payload: { item: item, type: 'favoriteBooks' } });
            } else {
              dispatch({ type: "SAVE_ITEM", payload: { item: item, type: 'favoriteBooks' } });
            }
            break;
          case "read":
            if (isBookRead(state, item as Book)) {
              dispatch({ type: "DELETE_ITEM", payload: { item: item, type: 'readBooks' } });
              dispatch({ type: "DELETE_ITEM", payload: {item: item, type: 'reviews'} });
            } else {
              dispatch({ type: "SAVE_ITEM", payload: { item: item, type: 'readBooks' }});
              setModal(true)
            }
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
        {!isAuthor && <Button
          className={"button toggle"}
          onClick={() => handleToggleClick("read")}
          label="Read"
          toggleAble={true}
          checkRead={() => isBookRead(state, item as Book)}
        />}
        <Button
          className={"button toggle"}
          onClick={() => handleToggleClick("favorite")}
          label="Favorite"
          toggleAble={true}
          checkFavorite={() => isItemFavorite(state, item)}
        />
      </div>
    );

  }
};

export default RenderToggleButtons;