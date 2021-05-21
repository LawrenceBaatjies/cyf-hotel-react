import React from "react";
import moment from "moment";

class RowResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }
  // Calculates and shows the number of nights for each booking
  dayDiff(checkIn, checkOut) {
    let date1 = moment(checkIn);
    let date2 = moment(checkOut);
    return date2.diff(date1, "days");
  }

  handleSelection = () => {
    this.setState(previousState => {
      return { selected: !previousState.selected };
    });
  };

  render() {
    const { ...res } = this.props.results;
    return (
      <tr
        onClick={this.handleSelection}
        className={this.state.selected ? "row-selected" : ""}
      >
        <td>{res.title}</td>
        <td>{res.firstName}</td>
        <td>{res.surname}</td>
        <td>{res.email}</td>
        <td>{res.roomId}</td>
        <td>{res.checkInDate}</td>
        <td>{res.checkOutDate}</td>
        <td>{this.dayDiff(res.checkInDate, res.checkOutDate)}</td>
      </tr>
    );
  }
}

export default RowResults;
