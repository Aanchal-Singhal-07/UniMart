// src/components/OverviewSection.js
import React from 'react';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <section className="overview">
        <br></br>
  <h2 className="overview-title">Overview</h2>
  <div className="overview-content">
    <div className="overview-text">
      <p className="overview-subtitle">
        At UniMart, we are dedicated to create a seamless platform where students can buy and sell used goods effortlessly. We prioritize convenience, affordability, and sustainability while ensuring a user-friendly experience.
        <br/>
        Our platform is designed with the needs of the Banasthali Vidyapith community in mind, offering an intuitive space to exchange essentials that make student life easier. From books and furniture to bicycles and electronics, we make it simple to find exactly what you need or sell what you no longer use.
        <br/>
        With attention to every detail, UniMart isn't just a marketplace—it's a place where students can connect, engage, and make smart, sustainable choices. Each listing, each message, and each transaction is crafted to provide an experience that is smooth, secure, and meaningful.
      </p>
    </div>
    <div className="overview-image">
      <img src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20742/300-SM1072615.jpg" alt="Overview"/>
    </div>
  </div>
</section>

  );
};

export default OverviewSection;
