import { useContext, useState } from "react";
import { GlobalContext } from "../../components/context/GlobalContext";
import useFetch from "../../custom-hooks/useFetch";
import Modal from "../../components/modal/Modal";
import useVersion from "../../custom-hooks/useVersion";
import renderDetails from "../../utils/renderDetails";
import renderDescription from "../../utils/renderDescription";
import findItem from "../../utils/findItem";
import { Author } from "../../types/types";
import renderImage from "../../utils/renderImage";
import RenderToggleButtons from "../../components/renderToggleButton/RenderToggleButtons";

const Shelf = () => {
  const { state} = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const parsedVersion = useVersion();
  const item = findItem(state, parsedVersion);
  const isAuthor = (item as Author).name !== undefined;
  const endpoint = "https://openlibrary.org";
  const query = isAuthor ? `/authors/${item!.key}` : `${item!.key}`;
  const options = ".json";

  const { data } = useFetch(query, endpoint, options);

  const handleClose = () => {
    setModal(false);
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
            <RenderToggleButtons item={item!} setModal={setModal}/>
          </div>
        </div>
      )}
      {modal && <Modal onClose={handleClose} />}
    </div>
  );
};

export default Shelf;
