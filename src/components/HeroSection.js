import React, { useEffect, useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const images = [
    "https://ideogram.ai/assets/image/lossless/response/KGAyeNx-Smail5u-bawrFg",
    "https://cdn.24.co.za/files/Cms/General/d/3864/fea3196d6875474aadfd80b2815f4a2b.jpeg",
    "https://ideogram.ai/assets/progressive-image/balanced/response/mfCf3fm3S9erFr08lRu6Rw",
    "https://ideogram.ai/assets/progressive-image/balanced/response/xlBErVf0QqiNp9CeRT0fbg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-text">
        <h1>WELCOME TO UNIMART WEBSITE</h1>
        <br /><br />
        <p>Shop smarter and experience convenience like never before, all at the best prices with UniMart.</p>
      </div>
    </section>
  );
}

export default HeroSection;
