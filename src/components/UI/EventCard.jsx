import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


export const Card = ({ imgSrc, name, description }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative border-2 rounded-badge">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black rounded-t-badge">
        <h3 className="text-xl mb-2 font-semibold text-white">{name}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
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
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white rounded-br-badge text-black hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};

