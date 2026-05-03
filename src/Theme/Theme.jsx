import { useEffect, useState } from "react";



export default function ThemeToggle() {

 const [currentTheme,setCurrentTheme]=useState('light')

 useEffect(()=>{
    document.documentElement.setAttribute('data-theme',currentTheme)
 },[currentTheme])

 

  return (
    <button
      onClick={() => setCurrentTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 border-white"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}