import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center ">
      <p className=" w-full h-fit font-bold text-[#6e6e6e] text-[18px] md:text-[36px] text-center tracking-tight  ">
        Hi I&apos;m{" "}
        <span className='bg-[hsla(220,100%,61%,1)] text-[#ebebeb] transition-all duration-200 hover:bg-transparent hover:text-amber-600 hover:opacity-80"'>
          Adam👋
        </span>
      </p>


      <p className="w-full h-fit font-black text-[#4e4e4e] text-[27px] md:text-[50px] -mt-[10px] pb-[20px] text-center  tracking-tight">
        <span className=' text-[hsla(220,100%,61%,1)] transition-all duration-200  hover:bg-amber-600  hover:text-[#ebebeb] hover:opacity-80"'>
          👨‍💻Product Designer
        </span>
        &nbsp;&&nbsp;
        <span className=' text-amber-600 transition-all duration-200  hover:bg-blue-600 hover:text-[#ebebeb] hover:opacity-80"'>
          Full-Stack Engineer
        </span>
      </p>

      <div className=" w-full h-fit flex flex-col md:flex-row justify-center items-center gap-[20px]">
        <Link
          href="/work"
          className="  shadow-amber-600 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer rounded-[8px] flex  gap-[10px] p-[15px] justify-center items-center w-fit h-[40px] bg-black text-[#fefefe]  text-[14px] font-bold"
        >
          View my work
        </Link>

        <Link
          href="/about"
          className=" shadow-blue-600 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer rounded-[8px] flex  gap-[10px] p-[15px] justify-center items-center w-fit h-[40px] bg-white text-[black]  text-[14px] font-bold"
        >
          About me
        </Link>
        
      </div>

      
    </div>

    
  );
};

export default Hero;
