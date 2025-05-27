import React, { useState } from 'react';
import { categories, categoriesList } from '../../Common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (title: string) => {
    setSelectedCategory(title);
  };

  const selectedItems = categoriesList.find(
    (cat) => cat.category.toLowerCase() === selectedCategory?.toLowerCase()
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-yellow-50 flex flex-col items-center p-4 md:p-8">
      <h2 className="text-xl md:text-4xl font-bold text-yellow-800 mb-6 md:mb-10 font-['Comic_Relief'] text-center px-4">
        What's Your Cravings?
      </h2>

      {/* Mobile View - Swiper */}
      <div className="w-full block md:hidden px-4">
        <Swiper
         freeMode={true}
          modules={[Pagination,FreeMode]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={false}
          grabCursor={true}
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          allowTouchMove={true}
          simulateTouch={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.05,
              spaceBetween: 15
            },
            375: {
              slidesPerView: 1.1,
              spaceBetween: 20
            },
            425: {
              slidesPerView: 1.2,
              spaceBetween: 20
            }
          }}
          // className="w-full !pb-12"
          // style={{ width: '100%', height: 'auto' }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div
                onClick={() => handleCategoryClick(item.title)}
                className={`w-full h-72 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 transition-all duration-300 cursor-grabbing hover:scale-105 ${
                  selectedCategory === item.title
                    ? 'ring-4 ring-yellow-400 bg-white shadow-xl'
                    : 'bg-white hover:shadow-xl'
                }`}
              
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
                <h3 className="text-lg font-semibold text-yellow-800 text-center leading-tight">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom pagination container */}
          <div className="swiper-pagination-custom"></div>
        </Swiper>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-6 lg:gap-10 max-w-6xl">
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item.title)}
            className={`w-48 lg:w-60 h-48 lg:h-60 rounded-3xl shadow-lg flex flex-col justify-center items-center p-4 transition-all duration-300 cursor-pointer hover:scale-105 ${
              selectedCategory === item.title
                ? 'ring-4 ring-yellow-300 bg-white shadow-xl'
                : 'bg-white hover:shadow-xl'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 lg:w-24 h-20 lg:h-24 object-contain mb-3"
            />
            <h3 className="text-lg lg:text-xl font-semibold text-yellow-800 text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Selected Category Items */}
      {selectedItems && (
        <div className="mt-8 md:mt-12 w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-yellow-200 transition-all animate-fade-in mx-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-pink-600 font-['Comic_Relief']">
            {selectedCategory} Combo
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg font-['Nunito']">
            {selectedItems.items.map((item, index) => (
              <li key={index} className="ml-2">{item}</li>
            ))}
          </ul>
          <p className="text-lg md:text-xl font-semibold text-right mt-6 text-yellow-700">
            Price: ₹{selectedItems.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;