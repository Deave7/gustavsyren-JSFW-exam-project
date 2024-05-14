import { useState } from "react";
import { CardProps } from "../../types/types";
import useLoadImage from "../../custom-hooks/useLoadImage";
import { LoaderCircle } from "lucide-react";

const Card: React.FC<CardProps> = ({ itemName, authorOrTopWork, pictureId }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

    const handleLoad = () => {
      setImageLoaded(true);
    }

    const handleError = () => {
      setImageError(true)
    }

    const src = typeof pictureId === 'string'
    ? `https://covers.openlibrary.org/a/olid/${pictureId}-S.jpg`
    : `https://covers.openlibrary.org/b/id/${pictureId}-S.jpg`

    useLoadImage(
      src,
      handleLoad,
      handleError,
      5000
    )

    return (
      <div className="card">
        <div className="cover-container">
          {!imageLoaded && !imageError && (
            <LoaderCircle className="loader"/>
          )}
          {imageError && (
            <img src="src\assets\book-4986.svg" alt="fallback_icon" height={50} />
          )}
          {imageLoaded && !imageError && (
            <img
              src={src}
              alt={typeof pictureId === "string" ? "author_picture" : "cover_picture"}
              height={50}
            />
          )}
        </div>
        <div className="info-container">
          <p>
            <span>{typeof pictureId === "string" ? "Name" : "Title"}:</span> {itemName}
          </p>
          <p>
            <span>{typeof pictureId === "string" ? "Top Work" : "Author"}:</span> {authorOrTopWork}
          </p>
        </div>
      </div>
    );
  };

export default Card;
