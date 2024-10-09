// components/HeroSection.jsx
// components/HeroSection.jsx
import { motion } from 'framer-motion';
import {UpcomingEvents} from '@/src/pages/home/heroSection';

const HeroSectionTwo = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        {/* You can add a background image or gradient here */}
      </div>

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center px-6 text-center text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-extrabold sm:text-5xl lg:text-6xl drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Upcoming Anime Events Near You
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg sm:text-xl lg:text-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Stay connected with the anime community.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="px-8 py-4 mt-8 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Handle button click (e.g., navigate to events page)
          }}
        >
          Explore Events
        </motion.button>
      </div>

      {/* Upcoming Events Carousel */}
      <div className="w-full mt-16">
        <UpcomingEvents />
      </div>
    </section>
  );
};

export default HeroSectionTwo;
