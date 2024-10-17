/// EventCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '../shared/image';

const EventCard = ({ event }) => {
  const {
    name,
    date,
    location,
    description,
    website_url,
    images,
    categories,
    likes,
    rating,
    attendees,
  } = event;

  // Format the date
  const eventDate = new Date(date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  // Combine location details
  const locationText = `${location.city}, ${location.state}, ${location.country}`;

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      {/* Thumbnail Image */}
      <div className="overflow-hidden">
        <Image
          src={images.card}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Event Title */}
        <h2 className="text-2xl font-bold text-purple-700 mb-2">{name}</h2>

        {/* Date and Time */}
        <div className="flex items-center text-gray-600 mb-1">
          {/* Date Icon */}
          <svg
            className="w-5 h-5 mr-2 text-pink-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* SVG path */}
          </svg>
          <span>
            {formattedDate} at {formattedTime}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-2">
          {/* Location Icon */}
          <svg
            className="w-5 h-5 mr-2 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* SVG path */}
          </svg>
          <span>{locationText}</span>
        </div>

        {/* Categories/Badges */}
        <div className="flex flex-wrap mb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Brief Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            {/* Likes Icon */}
            <svg
              className="w-5 h-5 mr-1 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* SVG path */}
            </svg>
            <span>{likes}</span>
          </div>
          <div className="flex items-center">
            {/* Rating Icon */}
            <svg
              className="w-5 h-5 mr-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* SVG path */}
            </svg>
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            {/* Attendees Icon */}
            <svg
              className="w-5 h-5 mr-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* SVG path */}
            </svg>
            <span>{attendees}</span>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <a
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-pink-500 text-white text-center font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300 relative z-20"
        >
          Visit Website
        </a>
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-16 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="text-white text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">
            Add to Favorites
          </button>
          <br />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Share
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
