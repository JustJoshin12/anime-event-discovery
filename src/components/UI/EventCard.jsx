import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const Card = ({ imgSrc, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover="hover"
      className="w-[220px] h-[300px] relative border-2 rounded-badge"
    >
      <div className="h-[50%] p-4 flex flex-col justify-center bg-galactic-primary/80 rounded-t-badge w-full relative ">
        <h3 className="text-xl mb-2 font-semibold text-white">{name}</h3>
        <p
          className="text-sm text-slate-300 overflow-hidden whitespace-pre-wrap text-ellipsis flex-grow"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {description}
        </p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10 rounded-badge"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 grid place-content-center bg-white rounded-br-badge text-black hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute bottom-12 left-[2%] transform -translate-x-1/2 bg-galactic-secondary text-white text-xs md:text-sm p-2 rounded-md z-20 w-max max-w-[200px] md:max-w-xs"
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};
