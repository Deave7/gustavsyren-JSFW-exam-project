import { useContext, useState } from "react";
import { GlobalContext } from "../../components/context/GlobalContext";
import { useNavigate } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";
import Button from "../../components/button/Button";
import isBookRead from "../../utils/isBookRead";
import isBookFavorite from "../../utils/isBookFavorite";
import Modal from "../../components/modal/Modal";
import useVersion from "../../custom-hooks/useVersion";
import renderDetails from "../../utils/renderDetails";
import renderDescription from "../../utils/renderDescription";
import findItem from "../../utils/findItem";
import { Book, Author } from "../../types/types";
import renderImage from "../../utils/renderImage";

const Shelf = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const parsedVersion = useVersion();
  const item = findItem(state, parsedVersion);
  const navigate = useNavigate();
  const isAuthor = (item as Author).name !== undefined;
  const endpoint = "https://openlibrary.org";
  const query = isAuthor ? `/authors/${item!.key}` : `${item!.key}`;
  const options = ".json";

  const { data } = useFetch(query, endpoint, options);

  const handleClose = () => {
    setModal(false);
  };

  const handleClick = () => {
    navigate(-1);
  };

  const handleToggleClick = (label: string) => {
    if (!item || isAuthor) return

    switch (label) {
      case "favorite":
        if (isBookFavorite(state, item as Book)) {
          dispatch({ type: "DELETE_BOOK", payload: {book: item as Book, type: 'favoriteBooks'} });
        } else {
          dispatch({ type: "SAVE_BOOK", payload: {book: item as Book, type: 'favoriteBooks'}});
        }
        break;
      case "read":
        if (isBookRead(state, item as Book)) {
          dispatch({ type: "DELETE_BOOK", payload: {book: item as Book, type: 'readBooks' }});
          dispatch({ type: "DELETE_REVIEW", payload: item as Book});
        } else {
          dispatch({ type: "SAVE_BOOK", payload:{ book: item as Book, type: 'readBooks'} });
          setModal(true);
        }
    }
  };


  return (
    <div className="shelf">
      {!modal && (
        <div className="info-container">
          <div className="image-details-container">
            <div className="image-container">
              {renderImage(item!, data!)}
            </div>
            <div className="details-container">
              {renderDetails(item!, data!)}
            </div>
          </div>
          <div className="description-container">
            <div>
              <h2>Description: </h2>
                {renderDescription(item!, data!)}
            </div>
          </div>
          <div className="button-container">
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
        </div>
      )}
      {modal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default Shelf;
