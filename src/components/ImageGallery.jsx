import React from "react";

function ImageGallery() {
  const images = [
    "https://images.pexels.com/photos/1140867/pexels-photo-1140867.jpeg",
    "https://images.pexels.com/photos/1140854/pexels-photo-1140854.jpeg",
    "https://images.pexels.com/photos/1141436/pexels-photo-1141436.jpeg",
  ];

  return (
      <div className="h-full mx-6 pt-2 pb-12 sm:mx-24 ">
        {images.map((image, i) => (
          <div key={i} className="h-60 pt-0">
            <img
              src={image}
              alt="gallery image"
              className="w-full h-full object-cover mt-10 rounded-xl "
            />
            
          </div>
        ))}
      </div>
  );
}

export default ImageGallery;
