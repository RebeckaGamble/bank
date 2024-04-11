"use client";
import React from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      className=""
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <MdOutlineWbSunny /> : <FaMoon />}
    </button>
  );
}
