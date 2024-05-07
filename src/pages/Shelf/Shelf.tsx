import { useContext, useState } from "react";
import { GlobalContext } from "../../components/context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../custom-hooks/useFetch";
import Button from "../../components/button/Button";



const Shelf = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const { index } = useParams<{index: string}>()

  const bookIndex = parseInt(index!, 10)
  const book = state.docs[bookIndex]

  const navigate = useNavigate()
  const [favoriteToggle, setFavoriteToggle] = useState(false)
  const [readToggle, setReadToggle] = useState(false)

  const handleClick = () => {
    navigate('/home')
  }

  const handleToggleClick = (label: string) => {
    switch (label) {
      case "favorite":
        if (favoriteToggle) {
          setFavoriteToggle(!favoriteToggle);
          dispatch({ type: "DELETE_FAVORITE", payload: book });
          console.log(state.user);
        } else {
          setFavoriteToggle(!favoriteToggle);
          dispatch({ type: "SAVE_FAVORITE", payload: book });
          console.log(state.user);
        }
        break;

      case "read":
        if (readToggle) {
          setReadToggle(!readToggle);
          dispatch({ type: "DELETE_READ", payload: book });
          console.log(state.user);
        } else {
          setReadToggle(!readToggle);
          dispatch({ type: "SAVE_READ", payload: book });
          console.log(state.user);
        }
    }
  }


  const { data } = useFetch( book.key, 'https://openlibrary.org', '.json' )
  console.log(data)
  const bookData = data as unknown as { subjects: string[]; description: string | { type: string; value: string } };

  return (
    <div className="shelf">
      <div className="info-container">
        <div className="image-details-container">
          <div className="image-container">
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="cover art" height={160} />
          </div>
          <div className="details-container">
            <ul>
              <li><span>Title:</span> {book.title}</li>
              <li><span>Author:</span> {book.author_name[0]}</li>
              <li><span>Release:</span> {book.first_publish_year}</li>
              <li><span>Publisher:</span> {book.publisher[0]}</li>
              <li><span>Subject:</span> {bookData ? bookData.subjects[0]: 'No subject avalaible'}</li>
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
            <Button className={"button toggle"} onClick={handleClick} label="Close" ></Button>
            <Button className={"button toggle"} onClick={() => handleToggleClick('favorite')} label="Read" toggleAble={true}></Button>
            <Button className={"button toggle"} onClick={() => handleToggleClick('read')} label="Favorite " toggleAble={true}></Button>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
