// components/ThemeToggle.js
"use client";

import { useTheme } from "../../../context/ThemeContext";
import { useState } from "react";
import "./styles/toggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(theme === "dark");

  const handleToggle = () => {
    toggleTheme();
    setIsActive(!isActive);
  };

  return (
    <div
      className={`toggle ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    ></div>
  );
};

export default ThemeToggle;
