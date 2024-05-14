import React from 'react';
import { CardProps } from '../../types/types';

const Card: React.FC<CardProps> = ({
  itemName,
  authorOrTopWork,
  pictureId,
}) => {
  const isCoverPicture = typeof pictureId === 'number';
  const src = isCoverPicture
    ? `https://covers.openlibrary.org/b/id/${pictureId}-S.jpg`
    : undefined;

  return (
    <div className="card">
      {isCoverPicture && (
        <div className="cover-container">
          <img
            src={src}
            alt="cover_picture"
            height={50}
          />
        </div>
      )}
      <div className="info-container">
        <p>
          <span>{isCoverPicture ? 'Title' : 'Name'}:</span>{' '}
          {itemName}
        </p>
        <p>
          <span>{isCoverPicture ? 'Author' : 'Top Work'}:</span>{' '}
          {authorOrTopWork}
        </p>
      </div>
    </div>
  );
};

export default Card;
