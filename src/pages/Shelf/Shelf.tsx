import { useContext, useState } from "react";
import { GlobalContext } from "../../components/context/GlobalContext";
import { useNavigate } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";
import Button from "../../components/button/Button";
import findBook from "../../utils/findBook";
import isBookRead from "../../utils/isBookRead";
import isBookFavorite from "../../utils/isBookFavorite";
import Modal from "../../components/modal/Modal";
import useVersion from "../../custom-hooks/useVersion";



const Shelf = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const [modal, setModal] = useState(false)
  const parsedVersion = useVersion()
  const book = findBook(state, parsedVersion)
  const navigate = useNavigate()

  const handleClose = () => {
    setModal(false)
  }
 
  const handleClick = () => {
    navigate(-1)
  }

  const handleToggleClick = (label: string) => {
    switch (label) {
      case "favorite":
        if (isBookFavorite(state, book!)) {
          dispatch({ type: "DELETE_FAVORITE", payload: book! });
        } else {
          dispatch({ type: "SAVE_FAVORITE", payload: book! });
        }
        break;

      case "read":
        if (isBookRead(state, book!)) {
          dispatch({ type: "DELETE_READ", payload: book! });
        } else {
          dispatch({ type: "SAVE_READ", payload: book! });
          setModal(true)
        }
    }
  }


  const { data } = useFetch( book!.key, 'https://openlibrary.org', '.json' )
  console.log(data)
  const bookData = data as unknown as { subjects: string[]; description: string | { type: string; value: string } };

  return (
    <div className="shelf">
      {!modal && (
        <div className="info-container">
          <div className="image-details-container">
            <div className="image-container">
              <img src={`https://covers.openlibrary.org/b/id/${book!.cover_i}-M.jpg`} alt="cover art" height={160} />
            </div>
            <div className="details-container">
              <ul>
                <li><span>Title:</span> {book!.title}</li>
                <li><span>Author:</span> {book!.author_name[0]}</li>
                <li><span>Release:</span> {book!.first_publish_year}</li>
                <li><span>Publisher:</span> {book!.publisher[0]}</li>
                <li><span>Subject:</span> {bookData ? bookData.subjects[0] : 'No subject available'}</li>
              </ul>
            </div>
          </div>
          <div className="description-container">
            <div>
              <h2>Description: </h2>
              <p>
                {bookData && typeof bookData.description === 'object' && bookData.description
                  ? bookData.description.value
                  : bookData && typeof bookData.description === 'string'
                  ? bookData.description
                  : 'No description available'}
              </p>
            </div>
          </div>
          <div className="button-container">
            <Button className={"button toggle"} onClick={handleClick} label="Close"  />
            <Button className={"button toggle"} onClick={() => handleToggleClick('read')} label="Read" toggleAble={true} checkRead={() => isBookRead(state, book!)} />
            <Button className={"button toggle"} onClick={() => handleToggleClick('favorite')} label="Favorite" toggleAble={true} checkFavorite={() => isBookFavorite(state, book!)} />
          </div>
        </div>
      )}
      {modal && <Modal onClose={handleClose}/>}
    </div>
  );
};

export default Shelf;
