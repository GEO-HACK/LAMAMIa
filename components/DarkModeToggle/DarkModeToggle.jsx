"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="relative w-[48px] h-[24px] items-center p-[2px] border-2 border-green-400 rounded-xl flex justify-between cursor-pointer"
    > 
      <div className="text-sm">🌙</div>
      <div className="text-sm">🌞</div>
      
      <div
        className="absolute w-[17px] h-[17px] bg-green-500 rounded-full transition-all duration-300"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
