// components/VerticalSidebar.js

import Link from "next/link";
import { motion } from "framer-motion";

const VerticalSidebar = ({ menuItems }) => {
  return (
    <div className="w-1/6  shadow-2xl py-20 h-full">
      <nav className="flex flex-col items-center p-4 gap-6">
        {menuItems.map((item) => (
             <motion.div
             whileHover={{ backgroundColor: "#1f2937", padding: "0.5rem 1rem", borderRadius: "0.375rem" }}
             transition={{ duration: 0.3 }}
             key={item.name}
             className="w-full"
           >
             <Link
               href={item.href}
               className="text-2xl tracking-wider mb-2 text-white block text-center"
             >
               {item.name}
             </Link>
           </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default VerticalSidebar;
