import { Link } from "react-router-dom";
import React, { useRef } from "react";
const Header = () => {
  let buttonRef = useRef();
  buttonRef.current = React.createRef();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  window.onscroll = () => {
    if (window.scrollY >= 600) {
      buttonRef.current.current.classList.add("show");
    } else {
      buttonRef.current.current.classList.remove("show");
    }
  };
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="main-navbar">
          <Link className="main-logo" to="/">
            Grooven
          </Link>
          <div className="main-links">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <Link className="started" to="/">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <button className="go" onClick={scrollToTop} ref={buttonRef.current}>
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
};
export default Header;
