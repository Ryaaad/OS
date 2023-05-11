import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
        ></motion.div>
        <motion.div
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
