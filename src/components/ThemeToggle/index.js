import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDark);
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="bg-light-bg dark:bg-dark-bg  px-4 py-2 rounded border border-caribbean w-auto sm:w-24 text-yellow-500"
    >
      {isDark ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
