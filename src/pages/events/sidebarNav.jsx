// components/VerticalSidebar.js

import Link from 'next/link';
import { motion } from 'framer-motion';

const VerticalSidebar = () => {
  const menuItems = [
    { name: 'Events', href: '/events' },
    { name: 'Search Events', href: '/about' },
    { name: 'Upcoming Events', href: '/services' },
    { name: 'Popular Events', href: '/portfolio' },
    { name: 'Event Ratings', href: '/contact' },
    { name: 'Whats New ', href: '/blog' },
  ];

  return (
    <motion.div
      className="w-1/6 bg-gray-800 shadow-lg"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex flex-col items-center p-4 gap-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-2xl tracking-wider mb-2 text-white hover:text-gray-300">
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};

export default VerticalSidebar;
