import { href } from "react-router-dom"
import { cn } from "../lib/utils"
import { useState } from "react"
import { useEffect } from "react"
import { CircleX, SquareMenu } from "lucide-react"

const navItems=[
  {name:"Hello...",href:"#me"},
  {name:"About Me",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Projects",href:"#projects"},
  {name:"Contact me",href:"#contact"},
]

export const Navbar=()=>{

  const [isScrolled,setScrolled]=useState(false);
  const [isMenu,setMenu]=useState(true);

  useEffect(()=>{
     const handleScroll=()=>{
      setScrolled(window.screenY>10)
     }

     window.addEventListener("scroll",handleScroll)
     return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return <nav className={cn(
    "fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5")}>


    <div className="container flex items-center justify-between">
      <div className="bg-background/30 backdrop-blur-md rounded-lg px-1 py-7 flex justify-center">
      <a className=" font-custom text-3xl sm:text-xl md:text-3xl font-bold font-sans" href="#me">
        <span className="text-glow">Shlok Katiyar</span>
      </a>
    </div>

      {/* dekstop */}
      <div className="hidden md:flex space-x-8 bg-background/30 backdrop-blur-md rounded-lg px-6 py-2">
        {navItems.map((item,key)=>(
          <a key ={key} href={item.href} className=" text-3xl text-foreground/80 
          hover:text-primary transition-colors duration-300 font-semibold">
            {item.name}
          </a>
        ))}

      </div>

      {/* mobile */}
      <button onClick={()=> setMenu((prev)=> !prev)} className="md:hidden text-foreground z-50"
        aria-label={isMenu? "Close Menu": "Open Menu"}>{isMenu? <CircleX />:<SquareMenu />}</button>
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
  "transition-all duration-300 md:hidden",
        isMenu ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item,key)=>(
            <a key ={key} href={item.href} className="text-foreground/80 
            hover:text-primary transition-colors duration-300"
            onClick={()=>setMenu(false)}>
              {item.name}
            </a>
          ))}

        </div>
      </div>
    </div>
  </nav>
}