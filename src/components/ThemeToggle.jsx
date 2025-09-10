import { useState } from "react"
import {ZapOff,Zap} from "lucide-react"
import { useEffect } from "react";
import { cn } from "../lib/utils";


export const ThemeToggle=()=>{

  const[isDarkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme==="dark"){
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }else{
      localStorage.setItem("theme","theme");
      setDarkMode(false);
    }
  },[])

  const toggleTheme=()=>{
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","theme");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark");
      setDarkMode(true);
    }
  }

  return (
  <button
    onClick={toggleTheme}
    className={cn(
      "focus:outline-none fixed top-30 right-5 z-50",
      "flex items-center gap-3 px-6 py-3 bg-background/60 rounded-full shadow-lg backdrop-blur-md","px-3 py-2 sm:px-6 sm:py-3", "text-sm sm:text-lg",
    )}
  >
    <span className="hidden sm:inline-block text-xl font-semibold tracking-wide">
      Switch Theme
    </span>
    {isDarkMode
      ? <Zap className="h-9 w-9 sm:h-9 sm:w-9 text-orange-300" />
      : <ZapOff className="h-9 w-9 sm:h-9 sm:w-9 text-black" />
    }
  </button>
);

}