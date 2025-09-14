import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config.js";
import parse from "html-react-parser/lib/index";

export default function PostCard({ $id, title, featuredImage, content }) {
  return (
    <div className=" w-full bg-red-300 rounded-lg overflow-hidden  ">
      <div
        className="w-full h-50 sm:h-60 justify-center  "
      >
        <img
          src={service.getFileView(featuredImage)}
          alt={title}
          className=" w-full h-full object-cover bg-no-repeat bg-center"
        />
      </div>

      <div className="h-30 p-3 flex flex-col justify-between ">
        <h2 className="text-lg font-medium text-red-900 overflow-hidden">{title.substring(0,60)+"..."}</h2>
        {/* <p className="overflow-hidden">{parse(content)}</p> */}
        <div className="flex justify-end ">
          <Link to={`/post/${$id}`} className=" text-white ">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
}
