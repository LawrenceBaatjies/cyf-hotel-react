import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Heading />
    </div>
  );
};

export default App;
