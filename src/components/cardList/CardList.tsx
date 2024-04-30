import Card from "../card/Card"

type CardListProps = {
    label: string
    height: string;
    width: string;
}

const CardList: React.FC<CardListProps> = ({ label, height, width }) => {
    return (
      <div className="card-list" style={{height: `${height}`, width: `${width}`}}>
        <h2>{label}</h2>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
}

export default CardList