import { useContext } from "react";
import Card from "../card/Card"
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

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
            <Link to={`/shelf/${index}`} key={index}><Card title={book.title} author={book.author_name[0]} coverId={book.cover_i}/></Link>
          ))}
        </div>
      </div>
    );
  }

export default CardList