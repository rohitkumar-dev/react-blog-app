import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
 "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
 "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
 "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg",
 "https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg",
  ];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImageUrl = images[imgIndex] || "";

  return (
    <div className="relative h-85 sm:h-120 w-full overflow-hidden flex items-center justify-center ">


      {/* <img
        src={currentImageUrl}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
      /> */}
      
      <div
        style={{ backgroundImage: `url(${currentImageUrl})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 transition-all duration-1000"
      ></div>



      <div className="relative z-10 p-6 text-white text-center text-shadow-lg">
        <h1 className="font-bold text-xl sm:text-4xl">
          The best blogging open platform for travellers and content creators
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          expedita.
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
