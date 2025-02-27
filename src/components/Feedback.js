import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    try {
      const response = await axios.post('http://localhost:3001/api/feedback', { rating, feedback });
      if (response.status === 201) {
        setMessage('Feedback successfully submitted');
      } else {
        setMessage(`Error: ${response.data}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data : error.message}`);
      console.error('Error details:', error.response ? error.response.data : error.message);
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="feedback-container">
      <h1>We value your opinion</h1>
      <form onSubmit={handleSubmit}>
        <div className="rating-section">
          <h2>How would you rate your overall experience?</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={star <= rating ? 'on' : 'off'}
                onClick={() => handleRating(star)}
              >
                <span className="star">&#9733;</span>
              </button>
            ))}
          </div>
          <div className="rating-labels">
            <span>Poor</span>
            <span>Satisfactory</span>
            <span>Good</span>
            <span>Excellent</span>
            <span>Outstanding</span>
          </div>
        </div>
        <div className="feedback-section">
          <h2>Kindly take a moment to tell us what you think?</h2>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="feedback-button">Share My Feedback</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default FeedbackForm;