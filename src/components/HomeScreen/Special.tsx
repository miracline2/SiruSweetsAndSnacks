
// import karuPatty from '../../assets/Images/panaKarupatty.png';

// const Special = () => {
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center p-8 bg-gradient-to-br from-yellow-50 to-pink-50">
//       <div className="flex flex-row items-center gap-10 bg-white p-6 rounded-3xl shadow-2xl border border-yellow-200 hover:scale-105 transition-transform duration-500">
        
//         {/* Karupatty Image */}
//         <img
//           src={karuPatty}
//           alt="Karupatty"
//           className="w-64 h-64 object-contain rounded-xl border-4 border-yellow-300 shadow-lg rotate-3"
//         />

//         {/* Text Section */}
//         <div className="text-center max-w-md">
//           <h2 className="text-4xl font-bold text-yellow-800 font-['Comic_Relief'] mb-4">
//             Fresh & Pure Karupatty!
//           </h2>
//           <p className="text-lg text-gray-700 font-['Nunito']">
//             Experience the rich traditional taste of palm jaggery sourced fresh from our villages. Perfect for sweets, coffee, and health. 🧡
//           </p>
//           <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Special;

import karuPatty from '../../assets/Images/panaKarupatty.png';

const Special = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-yellow-200 hover:scale-105 transition-transform duration-500">
        
        {/* Karupatty Image */}
        <img
          src={karuPatty}
          alt="Karupatty"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-contain rounded-xl border-4 border-yellow-300 shadow-lg rotate-3"
        />

        {/* Text Section */}
        <div className="text-center max-w-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-800 font-['Comic_Relief'] mb-3 sm:mb-4">
            Fresh & Pure Karupatty!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-['Nunito']">
            Experience the rich traditional taste of palm jaggery sourced fresh from our villages. Perfect for sweets, coffee, and health. 🧡
          </p>
          <button className="mt-4 sm:mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 sm:px-6 py-2 rounded-full shadow-md cursor-pointer transition-all">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Special;
