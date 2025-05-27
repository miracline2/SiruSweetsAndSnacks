import React from 'react';
import { overView } from '../../Common';
import { motion } from 'framer-motion';
import overViewBg from '../../assets/Images/Bg-image.png';

const OverView: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center p-6 pt-20">
      {/* Background Image - centered and no repeat */}
      <img
        src={overViewBg}
        alt="Background"
       className="absolute top-[calc(50%+40px)] left-1/2 w-64 md:w-96 lg:w-[30rem] transform -translate-x-1/2 -translate-y-1/2  pointer-events-none"

      />

      {/* Foreground Content */}
      {overView.map((items: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          className="z-10 text-center space-y-4 mt-20"
        >
          <h2 className="text-lg md:text-4xl lg:text-5xl font-bold text-gray-900">{items.title}</h2>
          <h3 className="text-md md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-700">
            {items.description}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default OverView;
