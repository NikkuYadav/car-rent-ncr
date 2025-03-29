import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-[8%] pb-2 bg-lime-50 relative">
      <div className="flex items-center">
        <img src={assets.logo} className="w-40 h-12 cursor-pointer" alt="Logo" />
      </div>
      
      {/* Hamburger Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 font-semibold text-lg">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `cursor-pointer hover:text-primary transition-all duration-300 ${
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-14 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 font-semibold text-lg md:hidden z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "hidden -translate-y-[100%] opacity-0"}`}
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <li key={item} className="text-center">
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `cursor-pointer hover:text-primary transition-all duration-300 ${
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
