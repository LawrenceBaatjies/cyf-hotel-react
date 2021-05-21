import React from "react";

const RestaurantButton = props => {
  return (
    // Add more pizzas button
    <button className="btn btn-success" onClick={props.addOrder}>
      Add More
    </button>
  );
};

export default RestaurantButton;
