"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Try to fetch the saved theme from localStorage or default to "dark"
  const [mode, setMode] = useState(() => {
    // Default to 'dark' or use the value from localStorage
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      return savedMode ? savedMode : "dark";
    }
    return "dark"; // Fallback to "dark" for SSR
  });

  const toggle = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    // Persist the mode in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newMode);
    }
  };

  useEffect(() => {
    // Apply the correct theme class to the <html> element when the mode changes
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(mode);
  }, [mode]); // Re-run this effect whenever `mode` changes

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
