import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function StartBtnArea() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="p-3 mt-5 mb-8 flex flex-col sm:flex-row content-center justify-around ">
      <p className="text-red-900 dark:text-white text-center px-3 py-5 my-auto sm:w-2/3 ">
        Inspire others by sharing your realistic experience
      </p>
      <div className="sm:w-1/3 sm:h-full sm:my-auto mx-auto">
        <button className="py-3 px-5  my-auto bg-red-600 text-white rounded-lg">
          <NavLink to={`${authStatus ? "/add-post" : "/login"}`}>
            Start writing
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default StartBtnArea;
