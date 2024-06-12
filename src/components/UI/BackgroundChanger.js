'use client';

import React, { useState, useEffect } from "react";

const images = [
  "/images/loginPageImages/animegirl.webp",
  "/images/loginPageImages/anime2.jpg",
  "/images/loginPageImages/rengoku.png",
];

function BackgroundChanger({ children }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: "background-image 1s ease-in-out",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="background fade-in flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8"
    >
      {children}
    </div>
  );
}

export default BackgroundChanger;
