import React from "react";

function ImageGallery() {
  const images = [
    "https://images.pexels.com/photos/8156192/pexels-photo-8156192.jpeg",
    "https://images.pexels.com/photos/12488375/pexels-photo-12488375.jpeg",
    "https://images.pexels.com/photos/8157076/pexels-photo-8157076.jpeg",
    ];

  return (
      <div className="h-full mx-6 pt-2 pb-12 sm:mx-24 ">
        {images.map((image, i) => (
          <div key={i} className="h-60 pt-0 mt-10 rounded-lg  ">
            <img
              src={image}
              alt="gallery image"
              className="w-full h-60 object-cover rounded-lg shadow-lg"
            />
            
          </div>
        ))}
      </div>
  );
}

export default ImageGallery;
