import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="logo">UniMart</div>
      <nav className="tabs">
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/aboutus">About Us</Link>
          </div>
          <div>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>
      </nav>
      <div className ="auth-buttons">
      <button ClassName="login-button">
          <Link to="/login">Login</Link>
        </button>
        <button ClassName="signup-button">
          <Link to="/signup">Sign Up</Link>
        </button>        <button ClassName="buyer-button">
          <Link to="/buyer">Buyer</Link>
        </button>
        <button ClassName="seller-button">
          <Link to="/seller">Seller</Link>
        </button>
      </div>
      <a href="#profile" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
          alt="Profile"
          className="profile"
        />
      </a>
    </header>
  );
}

export default Header;
