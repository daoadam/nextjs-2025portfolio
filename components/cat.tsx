'use client';
import { useState } from "react";
import Image from "next/image";

const HoverCat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-4 right-4 p-4 z-[50] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={isHovered ? "/pixelcat2pet.gif" : "/pixelcat2.png"} 
        alt="Pixel Cat"
        width={200} 
        height={200}
        className= "hidden sm:block w-[100px] md:w-[150px] lg:w-[200px] transition-opacity duration-200"

      />
    </div>
  );
};

export default HoverCat;