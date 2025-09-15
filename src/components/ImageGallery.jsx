import React from "react";

function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1651457897431-ee5584e0d4ba?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/8156192/pexels-photo-8156192.jpeg",
    "https://images.pexels.com/photos/8157076/pexels-photo-8157076.jpeg",
    "https://images.unsplash.com/photo-1705769942096-7306c36742fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
      <div className="h-full mx-6 pt-2 pb-12 sm:mx-24 ">
        {images.map((image, i) => (
          <div key={i} className="h-60 pt-0 mt-10 rounded-lg  ">
            <img
              src={image}
              alt="gallery image"
              className="w-full h-60 object-cover rounded-lg"
            />
            
          </div>
        ))}
      </div>
  );
}

export default ImageGallery;
