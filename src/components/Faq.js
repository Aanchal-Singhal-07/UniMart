// FAQ.js
import React from 'react';
import './Faq.css';
function Faq() {
  return (
    <section className="faq-section">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <div className="faq-item">
        <h2>What is UniMart?</h2>
        <p>UniMart is an online platform for buying and selling second-hand items within the Banasthali Vidyapith campus. It connects students who want to sell or buy used items like trunks, bicycles, study tables, and more.</p>
      </div>
      <div className="faq-item">
        <h2>How do I list an item on UniMart?</h2>
        <p>To list an item, simply log in to your account, go to the "Sell" section, and fill out the item details, including price and description. Your listing will appear in the marketplace for other students to browse and buy.</p>
      </div>
      <div className="faq-item">
        <h2>Can I negotiate the price of items listed?</h2>
        <p>Yes! Price negotiations are encouraged. Once you connect with a seller, you can discuss and agree upon a price that works for both parties.</p>
      </div>
      <div className="faq-item">
        <h2>Is there a fee to use UniMart?</h2>
        <p>No, there is no fee for using UniMart. It is a free platform to buy and sell used items for the Banasthali Vidyapith community.</p>
      </div>
    </section>
  );
}

export default Faq;
