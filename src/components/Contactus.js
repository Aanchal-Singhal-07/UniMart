import React from "react";
import "./Contactus.css"; // You can create your own CSS for this component

function Contactus() {
return (
    <section className="contactus">
    <h2>GET IN TOUCH</h2>
    
      <div className="contact-items">
        <div className="contact">
          <img src="https://cdn-icons-png.flaticon.com/128/9413/9413857.png" alt="Gym" /> {/* Replace with actual image path */}
          <h3>ADDRESS</h3>
          <p>497, Mansarovar Road<br></br> Indore, Madhya Pradesh<br />
          PIN: 452020</p>
        </div>
        <div className="contact">
          <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="Pool" />
          <h3>PHONE</h3>
          <p>+91 9876543210<br/>+91 9988776655</p>
        </div>
        <div className="contact">
          <img src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png" alt="Dining" />
          <h3>E-MAIL</h3>
          <p>xyzhotel@gmail.com</p>
        </div>
        
      </div>
      </section>

);

}

export default Contactus;