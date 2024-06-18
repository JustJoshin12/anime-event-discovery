'use client';

import { useState, useEffect } from "react";

const images = [
  "/images/loginPageImages/anime.jpg",
  "/images/loginPageImages/anime2.jpg",
  "/images/loginPageImages/anime3.jpg",
  "/images/loginPageImages/fatestaynight.jpg"
];

function BackgroundChanger({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  if (!isLoaded) {
    return null; // or a loader/spinner component
  }

  return (
    <div className="background-changer flex min-h-screen flex-1 flex-col justify-center px-6 lg:px-8">
      {children}
      <style jsx>{`
        @keyframes backgroundChange {
          0% {
            background-image: url('/images/loginPageImages/anime.jpg');
          }
          25% {
            background-image: url('/images/loginPageImages/anime2.jpg');
          }
          50% {
            background-image: url('/images/loginPageImages/anime3.jpg');
          }
          75% {
            background-image: url('/images/loginPageImages/fatestaynight.jpg');
          }
          100% {
            background-image: url('/images/loginPageImages/anime.jpg');
          }
        }

        .background-changer {
          animation: backgroundChange 16s infinite ease-in-out;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}

export default BackgroundChanger;
