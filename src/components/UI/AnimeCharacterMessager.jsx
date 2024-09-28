"use-client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CharacterWithMessage = ({imageSrc}) => {
  // State to control when the message appears
  const [showMessage, setShowMessage] = useState(false);

  // After 3 seconds, show the message bubble
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Character fade-in animation */}
      <motion.img
        src={imageSrc} // Replace with your character image path
        alt="Character"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-64 h-auto"
      />

      {/* Message bubble that shows after a delay */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 -right-40 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm"
        >
          <p className="text-gray-700 text-center">Welcome to the Anime World!</p>
        </motion.div>
      )}
    </div>
  );
};

export default CharacterWithMessage;
