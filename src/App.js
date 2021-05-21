import Heading from "./Heading";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
// import Footer from "./Footer";

import "./Style.css";

const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <Bookings />
      <Restaurant />
      <hr />
      <TouristInfoCards />
      <hr />
      {/* <Footer footerData={footerData} /> */}
    </div>
  );
};

export default App;
