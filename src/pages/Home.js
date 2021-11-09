import React from 'react'
import "../components/styles/home.css"
// import background from "../assets/images/Women-homepage.jpeg"
const Home = () => {
    return (
        <div className="home">
             <section className="header-section">
        <div className="center-div">
          <h1 className="font-weight-bold"> <span className="logo-letter">A</span>bhaya.</h1>
          <p>
          here at your service!
          </p>
          <div className="header-buttons">
            <a href="#"> Contact</a>
            <a href="#"> About Us</a>
          </div>
        </div>
      </section>
            {/* <h1 className="heading"> <span className="logo-letter">A</span> bhaya.</h1>
            <h5 >here at your service!</h5> */}
            {/* <p>for you and the people you love</p> */}

        </div>
    )
}

export default Home
