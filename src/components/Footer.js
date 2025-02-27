import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-left">
    <h3>UniMart</h3>
    <p>
      80 Vasundra Colony, K-Block, Shastri Nagar, Meerut, Uttar Pradesh<br />
      PIN: 250004<br />
      +91 9368041684<br />
      unimart@gmail.com
    </p>
  </div>
  <div className="footer-links">
    <a href="#about-us">About Us</a>
    <br />
    <a href="#contact-us">Contact Us</a>
    <br />
    <a href="#terms">Terms & Conditions</a>
  </div>
  <div className="footer-social">
    <a href="#facebook">
      <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" className="social-logo" /> Facebook
    </a>
    <br />
    <a href="#twitter">
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" className="social-logo" /> Twitter
    </a>
    <br />
    <a href="#instagram">
      <img src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png" alt="Instagram" className="social-logo" /> Instagram
    </a>
  </div>
</footer>

  );
}

export default Footer;
