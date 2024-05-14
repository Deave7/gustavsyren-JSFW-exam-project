import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { Author, Book } from "../types/types";

function renderCard(item: Book | Author, index: number) {
    if ('author_name' in item) {
        const book = item as Book
        return ( 
            <Link to={`/shelf/${book._version_}`} key={index}>
                <Card 
                    itemName={book.title} 
                    authorOrTopWork={book.author_name[0]} 
                    pictureId={book.cover_i}/>
            </Link>
         );
    }
    else {
        const author = item as Author
        return (
            <Link to={`/shelf/${author._version}`} key={index}>
                <Card 
                    itemName={author.name} 
                    authorOrTopWork={author.top_work} 
                    pictureId={author.key}></Card>
            </Link>
        )
    }
    
}

export default renderCard;