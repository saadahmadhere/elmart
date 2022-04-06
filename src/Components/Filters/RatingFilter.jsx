import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useFilter } from "../../Helper";

const RatingFilter = () => {
  const {
    filterState: {
      filters: { rating },
    },
    filterDispatch,
  } = useFilter();

  return [...Array(5)].map((_, index) => (
    <span
      className="mr_1"
      style={{ cursor: "pointer", color: "#ff9529" }}
      onClick={() => {
        filterDispatch({ type: "FILTER_BY_RATING", payload: index + 1 });
      }}
      key={index}>
      {rating >= index + 1 ? <FaStar /> : <FaRegStar />}
    </span>
  ));
};

export { RatingFilter };
