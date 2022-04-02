import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ reviews, ratings, color }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i}>
            {ratings >= i + 1 ? (
              <FaStar style={{ color }} />
            ) : ratings >= i + 0.5 ? (
              <FaStarHalfAlt style={{ color }} />
            ) : (
              <FaRegStar style={{ color }} />
            )}
          </span>
        );
      })}

      <span className="ml_2">{`${reviews} reviews`}</span>
    </>
  );
};

Rating.defaultProps = {
  color: "#ff9529",
};

export { Rating };
