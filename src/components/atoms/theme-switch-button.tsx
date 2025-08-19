"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { Button, type ButtonProps } from "./button";

type ThemeSwitchButtonProps = ButtonProps;

export function ThemeSwitchButton(props: ThemeSwitchButtonProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Button
      variant="secondary"
      onClick={() => setDarkMode(!darkMode)}
      leftIcon={darkMode ? <Sun /> : <Moon />}
      size="icon"
      {...props}
    />
  );
}
