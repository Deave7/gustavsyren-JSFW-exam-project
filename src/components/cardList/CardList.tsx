import { useContext } from "react";
import Card from "../card/Card"
import { GlobalContext } from "../context/GlobalContext";

type CardListProps = {
    label: string
    height: string;
    width: string;
}

const CardList: React.FC<CardListProps> = ({ label, height, width }) => {
  const { state } = useContext(GlobalContext)
  console.log(state)
  
    return (
      <div className="card-list" style={{height: `${height}`, width: `${width}`}}>
        <h2>{label}</h2>
        <div className="card-container">
          {state.docs.map((book, index) => (
            <Card key={index} title={book.title} author={book.author_name} coverId={book.cover_i}/>
          ))}
        </div>
      </div>
    );
  }

export default CardList