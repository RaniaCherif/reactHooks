import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ searchMovie,rateMovie }) => {
  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => searchMovie(e.target.value)}
      />
      <br></br>
      <StarRatingComponent
        name="star" /* name of the radio input, it is required */
        //value='5'/* number of selected icon (`0` - none, `1` - first) */
        starColor="#CA3C66" /* color of selected icons, default `#ffb400` */
        emptyStarColor="#333" /* color of non-selected icons, default `#333` */
        onStarClick={(value)=>rateMovie(value)}


      />
    </div>
  );
};

export default Filter;
