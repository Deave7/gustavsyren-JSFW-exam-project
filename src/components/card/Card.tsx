
const Card = () => {
  return (
    <div className="card">
      <div className="cover-container">
        <img src="src\assets\book-4986.svg" alt="book" height={50} />
      </div>
      <div className="info-container">
        <p>Title: Lord of the Rings</p>
        <p>Author:</p>
        <p>Genre:</p>
      </div>
      <div className="favorite-container">
        <img src="src\assets\heart.svg" alt="heart" />
      </div>
    </div>
  );
};

export default Card;
