type CardProps = {
  title: string,
  author: string[],
  coverId: number,
}

const Card: React.FC<CardProps> = ({title, author,coverId}) => {
  return (
    <div className="card">
      <div className="cover-container">
        <img src={`https://covers.openlibrary.org/b/id/${coverId}-S.jpg`} alt="cover" height={50} />
      </div>
      <div className="info-container">
        <p>Title: {title}</p>
        <p>Author: {author}</p>
      </div>
      <div className="favorite-container">
        <img src="src\assets\heart.svg" alt="heart" />
      </div>
    </div>
  );
};

export default Card;
