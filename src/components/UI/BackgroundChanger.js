'use client';

import { useState, useEffect } from "react";

const images = [
  "/images/loginPageImages/anime.jpg",
  "/images/loginPageImages/anime2.jpg",
  "/images/loginPageImages/anime3.jpg",
  "/images/loginPageImages/fatestaynight.jpg"
];

function preloadImages(srcs) {
  srcs.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function BackgroundChanger({ children }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      preloadImages(images);

      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }).catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
        });
      }
    }

    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="background-changer flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8">
      {children}
      <style jsx>{`
        .background-changer {
          background-image: url(${images[currentImage]});
          transition: background-image 1s ease-in-out, opacity 0.5s ease-in-out;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 1;
        }
        .background-changer.fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default BackgroundChanger;
