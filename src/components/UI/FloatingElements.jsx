import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = Array.from({ length: 20 });

  const elementImages = [
    '/images/avatarIcons/tengen.gif',
    '/images/avatarIcons/luffy.gif',
    '/images/avatarIcons/tanjiro.gif',
    '/images/avatarIcons/toji.webp',
    '/images/avatarIcons/megumi.gif',
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {elements.map((_, index) => (
        <motion.img
          key={index}
          src={elementImages[index % elementImages.length]} // Replace with your element images
          alt="Floating Element"
          className="absolute w-20 h-20 opacity-100"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
