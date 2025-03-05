import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DisplayData from "./DisplayData";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    hostel: "",
    phone: "",
    course: "",
    objectForSale: "",
    amountExpected: "",
    photo: null,
  });

  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:7878/submit", data);
      alert("🎉 Form submitted successfully!");
      
      // Reset form fields after successful submission
      setFormData({
        name: "",
        age: "",
        hostel: "",
        phone: "",
        course: "",
        objectForSale: "",
        amountExpected: "",
        photo: null,
      });

      // Clear file input field
      document.getElementById("fileInput").value = "";
      
    } catch (error) {
      console.error(error);
      alert("⚠️ Error submitting form.");
    }
  };

  return (
    <div className="app-container">
      <div className="background-animation"></div>

      <div className="top-button-container">
        <button onClick={() => setShowForm(!showForm)} className="toggle-button">
          {showForm ? "📜 View Listings" : "✏️ Go Back to Form"}
        </button>
      </div>

      {showForm ? (
        <div className="form-container">
          <h2 className="form-title">🛒 UniMart - Your Campus Marketplace</h2>
          <form onSubmit={handleSubmit} className="enhanced-form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="number" name="age" placeholder="Your Age" value={formData.age} onChange={handleChange} required />
            <input type="text" name="hostel" placeholder="Hostel Name" value={formData.hostel} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="course" placeholder="Course Name" value={formData.course} onChange={handleChange} required />
            <input type="text" name="objectForSale" placeholder="Item for Sale" value={formData.objectForSale} onChange={handleChange} required />
            <input type="number" name="amountExpected" placeholder="Expected Price (₹)" value={formData.amountExpected} onChange={handleChange} required />
            
            <label className="file-upload">
              Upload Photo 📸
              <input type="file" id="fileInput" name="photo" onChange={handleFileChange} required />
            </label>

            <button type="submit" className="submit-button">🚀 Post Listing</button>
          </form>
        </div>
      ) : (
        <DisplayData goBack={() => setShowForm(true)} />
      )}
    </div>
  );
};

export default App;
