import React from "react";
import { NavLink } from "react-router-dom";
import { SectionTag } from "../index";
function Footer() {
  return (
    
    <footer className="bg-red-600 text-white">
        <SectionTag tagname={"Quick Links"}/>
      <ul className="text-center sm:text-start sm:flex justify-around border-y border-red-300">
        <div>
          <li className="py-2">
            <NavLink to="/" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>Home</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/about" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>About Us</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/contact" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>Contact Us</NavLink>
          </li>
        </div>
        <div>
          <li className="py-2">
            <NavLink to="/privacy-policy" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>Privacy Policy</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/company" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>Company</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/terms-conditions" className={({isActive})=> `${isActive? "bg-red-300 text-red-900": ""} py-1 px-2 rounded-lg`}>Terms and Conditions</NavLink>
          </li>
        </div>
      </ul>
      <p className="text-center text-xs p-3 ">
        CopyRight @2025
      </p>
    </footer>
  );
}

export default Footer;
