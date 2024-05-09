import { CardProps } from "../../types/types";

const Card: React.FC<CardProps> = ({ title, author, coverId }) => {
  return (
    <div className="card">
      <div className="cover-container">
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-S.jpg`}
          alt="cover"
          height={50}
        />
      </div>
      <div className="info-container">
        <p>
          <span>Title:</span> {title}
        </p>
        <p>
          <span>Author:</span> {author}
        </p>
      </div>
    </div>
  );
};

export default Card;
