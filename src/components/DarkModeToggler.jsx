import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeToggler = () => {
  // Initialize theme state from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Handle theme toggle
  const handleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const theme = newMode ? "dark" : "light";

    // Update theme in localStorage
    localStorage.setItem("theme", theme);

    // Add/remove the 'dark' class from <html>
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Apply the saved theme on initial render
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button onClick={handleDarkMode}>
        {darkMode ? (
            <MoonIcon className="h-6" />
        ) : (
            <SunIcon className="h-6 text-yellow-400" />
        )}
      </button>
    </>
  );
};

export default DarkModeToggler;
