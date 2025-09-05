import { useEffect } from "react";
import { useState } from "react"


export const MyBackground=()=>{

  const [name,setname]=useState([]);
  const [meteors,setMeteors]=useState([]);

  useEffect(()=>{
    const generateAll = () => {
    generatename();      
    generateMeteors();   
  };

  generateAll();
    const handleResize=()=>{
      generateAll();
    };

    window.addEventListener('resize',handleResize)
    
    return ()=>window.removeEventListener('resize',handleResize); 
  },[]);

const rows = 5;
const cols = 6;
const generatename = () => {
  const newname = [];
  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      newname.push({
        id: row * cols + col,
        x: (col + Math.random() * 0.7) * (100 / cols), 
        y: (row + Math.random() * 0.7) * (100 / rows),
        
      });
    }
  }
  setname(newname);
};



const generateMeteors=()=>{
  const numberOfMeteors =7
  const newMeteors=[];
  for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100, // left %
        y: Math.random() * 100, // top %
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
}

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {name.map((star) => (
  <div
    key={name.id}
    className="absolute glow font-mono select-none"
    style={{
      fontSize: name.size * 8 + "px", 
      left: star.x + "%",
      top: star.y + "%",
      opacity: star.opacity*0.5,
      animationDuration: star.animationDuration + "s",
      fontFamily: "monospace",
      userSelect: "none",
    }}
  >
    {"{<shlocode"}{">}"}
  </div>
))}

{meteors.map((meteors) => (
        <div
          key={meteors.id}
          className="meteor animate-meteor"
          style={{
            width: meteors.size*20 + "px",
            height: meteors.size + "px",
            left: meteors.x + "%",
            top: meteors.y + "%", 
            animationDelay: meteors.delay,
            position: "absolute",
            animationDuration: meteors.animationDuration + "s",
          }}
        />
      ))}

    </div>
  );
}