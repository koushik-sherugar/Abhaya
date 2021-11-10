import React from "react";
import "../components/styles/home.css";
import { Link } from "react-router-dom";
// import background from "../assets/images/Women-homepage.jpeg"
const Home = () => {
  return (
    <div className="home">
      <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold">
            {" "}
            <span className="logo-letter">A</span>bhaya.
          </h1>
          <p>here at your service!</p>
          <div className="header-buttons">
            <Link to="/contact"> Contact</Link>
            <Link to="/about"> About Us</Link>
            <Link to="/location">Location</Link>
          </div>
        </div>
      </section>
      {/* <h1 className="heading"> <span className="logo-letter">A</span> bhaya.</h1>
            <h5 >here at your service!</h5> */}
      {/* <p>for you and the people you love</p> */}
    </div>
  );
};

export default Home;
