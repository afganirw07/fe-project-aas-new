import React, { useState, useEffect } from 'react';

// Daftar gambar
const images = [
  'https://hypesneakerid.com/wp-content/uploads/2025/05/BANNER-PROMOTIONS.png',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sneakers-mockup-banner-design-template-a168837d88ce417842e272c989245883_screen.jpg',
  'https://img.freepik.com/premium-vector/discount-social-media-ramadan-banner-sale_92715-76.jpg',
];

// bagian bulat bulat
const BannerFirst = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <>
      {/* wrapper */}
      <div className="px-4 pb-4 sm:px-7 lg:px-30">
        <div className="relative w-full mt-5 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[230px] mx-auto overflow-hidden rounded-2xl shadow-lg ">
          {/* banner */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full flex-shrink-0 object-cover sm:object-cover md:object-contain lg:object-cover"
              />
            ))}
          </div>

          {/* bulat bulat */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-red-500' : 'bg-gray-400'
                } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerFirst;
