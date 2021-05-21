import React from "react";
import Order from "./Order";
// use the React function `useState`
class Restaurant extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="card bg-light text-dark">
          <div className="card-body">
            <h3>Restaurant Orders</h3>
            <ul className="list-group list-group-flush">
              {/* Add more pizzas */}
              <Order orderType={"Pizzas"} />
              <Order orderType={"Salads"} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
