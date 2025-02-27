import React from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    this.setState(previousState => {
      return { orders: previousState.orders + 1 };
    });
  };

  render() {
    return (
      <li className="list-group-item d-flex justify-content-between">
        {this.props.orderType} : {this.state.orders}
        <RestaurantButton addOrder={this.addOrder} />
      </li>
    );
  }
}

export default Order;
