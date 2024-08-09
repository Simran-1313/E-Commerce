import React from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, className }) => {
  return (
    <Rating
      initialRating={rating}
      readonly
      emptySymbol={<FaStar color="#bfbfbf" size={24} />}
      fullSymbol={<FaStar color="#ffad33" size={24} />}
      className={`${className}`}
    />
  );
};

export default StarRating;
