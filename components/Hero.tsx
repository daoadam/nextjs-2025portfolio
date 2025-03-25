import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center  '>
       <p className=" w-full font-bold text-[#4e4e4e] text-[36px] md:text-[50px] text-center tracking-tight">
          Hi I&apos;m Adam
        </p>
      

  
        <p className="w-full h-fit font-medium text-[#6e6e6e] text-[16px] md:text-[22px] text-center pt-[5px] pb-[20px] tracking-tight">
          👨‍💻Product Designer & Full-Stack Engineer
          <br />
          🎓Student @ The University of Adelaide
          <br />
          😻Passionate about UX, productivity,
          <br />
          AI and accessibility
        </p>
    

      <div className=" w-full h-fit flex flex-col md:flex-row justify-center items-center gap-[20px]">
        <Link href = "/work" className="  shadow-amber-600 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer rounded-[8px] flex  gap-[10px] p-[15px] justify-center items-center w-fit h-[40px] bg-black text-[#fefefe]  text-[14px] font-bold">
          View my work
        </Link>


        <Link href = "/about" className=" shadow-blue-600 shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer rounded-[8px] flex  gap-[10px] p-[15px] justify-center items-center w-fit h-[40px] bg-white text-[black]  text-[14px] font-bold">
          About me
        </Link>

       
      </div>
    </div>
  )
}

export default Hero
