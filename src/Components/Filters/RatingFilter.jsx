import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import { useState } from "react";
import { useFilter } from "../../Helper";

const RatingFilter = () => {
  const {
    filterState: {
      filters: { rating },
    },
    filterDispatch,
  } = useFilter();

  return [...Array(5)].map((_, i) => (
    <span
      className="mr_1"
      style={{ cursor: "pointer", color: "#ff9529" }}
      onClick={() => {
        filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 });
      }}
      key={i}>
      {rating >= i + 1 ? <FaStar /> : <FaRegStar />}
    </span>
  ));
};

export { RatingFilter };
