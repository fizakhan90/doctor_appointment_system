import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import "../styles/Landing.css"; // Import CSS file

const LandingPage = () => {
  return (
  
    
      <><div header className="header">
      <div>
        <div className="left">
          {/* left box for logo */}
          Doctors' App
        </div>
        <div className="mid">
          {/* mid box for nav */}
          <ul className="navbar">
            <li><a href="/">Home</a></li> {/* Use Link or NavLink for internal navigation */}
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>
        <div className="right">
          {/* right box for buttons */}
          <button><div className="btn">Search for Doctors</div></button>
          <button><div className="btn"> Contact Us</div></button>
        </div>
        <div className="text-right">
          We connect Doctors and Patients!
        </div>
      </div>
    </div><div className="img-right">
        {/* Placeholder for right image */}

      </div></>
    
  )

  }
export default LandingPage;
