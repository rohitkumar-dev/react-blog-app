import React from "react";

function SectionTag({tagname, className=""}) {
  return (
    <div className={`sticky top-0 ${className}`}>
      <p className="px-6 py-4 sm:px-30 bg-red-600 text-white font-medium text-xl text-center ">
        {tagname}
      </p>
    </div>
  );
}

export default SectionTag;
