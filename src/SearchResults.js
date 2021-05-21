import React from "react";
import RowResults from "./RowResults";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title </th>
          <th>FirstName</th>
          <th>Surname</th>
          <th>Email</th>
          <th>RoomId</th>
          <th>CheckInDate</th>
          <th>CheckOutDate</th>
          <th>DaysStaying</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(el => (
          <RowResults results={el} key={el.id} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
