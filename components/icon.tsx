

"use client";
"use client";
import Image from "next/image";

const Icon = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div>
      <Image
        src={isHovered ? "/pixeladam4gif.gif" : "/pixeladam4.png"}
        alt="Adam"
        width={100}
        height={100}
        className="rounded-[80px] border bg-gradient-to-r from-purple-500 to-indigo-500"
      />
    </div>
  );
};

export default Icon;
