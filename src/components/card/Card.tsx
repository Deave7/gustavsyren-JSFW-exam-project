import Button from "../button/Button";

type CardProps = {
  title: string,
  author: string,
  coverId: number,
}
const Card: React.FC<CardProps> = ({title, author, coverId}) => {

  const handleClick = () => {

  }

  return (
    <div className="card">
      <div className="cover-container">
        <img src={`https://covers.openlibrary.org/b/id/${coverId}-S.jpg`} alt="cover" height={50} />
      </div>
      <div className="info-container">
        <p><span>Title:</span> {title}</p>
        <p><span>Author:</span> {author}</p>
      </div>
      <div className="favorite-container">
        <Button className={"button card-button"} onClick={handleClick} label="Favorite"></Button>
      </div>
    </div>
  );
};

export default Card;
