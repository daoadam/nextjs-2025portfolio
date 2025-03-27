"use client";
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
      {/* Image that appears when hovered */}
      <div className="">
      <Image
        src={isHovered ? "/pixelsun.gif" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ANFZrHAAAAAElFTkSuQmCC"} // Base64 transparent PNG
        alt="Pixel Sun"
        width={200}
        height={200}
        className="hidden sm:block w-[100px] md:w-[150px] xl:w-[200px] transition-opacity duration-200"
      />
      </div>
      

      {/* Image that switches when hovered */}
      <div className="-mt-[50%]"> 
      <Image
        src={isHovered ? "/pixelcat2pet.gif" : "/pixelcat2.png"} // Normal and hover cat images
        alt="Pixel Cat"
        width={200}
        height={200}
        className="hidden sm:block w-[100px] md:w-[150px] xl:w-[200px] transition-opacity duration-200"
      />
      </div>
    </div>
  );
};

export default HoverCat;
