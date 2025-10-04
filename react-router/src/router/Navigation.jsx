import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="h-15 bg-zinc-500 px-10 flex items-center justify-between">
      <h1 className="text-2xl text-white cursor-pointer">Logo</h1>
      <nav className="flex gap-10 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-300"
          }
          to={"/"}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-300"
          }
          to={"/"}
          to={"/about"}
        >
          {" "}
          About
        </NavLink>
      </nav>
      <div className="flex text-white gap-5">
        <p className="cursor-pointer">Profile</p>
        <p className="cursor-pointer">Signin</p>
      </div>
    </div>
  );
};

export default Navigation;
