"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Work = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setIsSmallScreen(false); // If screen is large, reset dropdown state
        setIsOpen(false);
      } else {
        setIsSmallScreen(true);
      }
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Run once on mount

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex w-full gap-[35px] p-[45px] justify-center items-center h-fit">
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-[15px] text-[#333333]">
            adamddao@gmail.com
          </div>

          {/* Button appears only on mobile */}
          {isSmallScreen && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-[44px] h-[44px] flex flex-col items-center justify-evenly cursor-pointer"
            >
              {isOpen ? (
                // X Icon
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="absolute h-[2px] w-[20px] bg-[#999999] transform rotate-45"></div>
                  <div className="absolute h-[2px] w-[20px] bg-[#999999] transform rotate-135"></div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-evenly h-full">
                  <div className="h-[2px] w-[20px] bg-[#999999]"></div>
                  <div className="h-[2px] w-[20px] bg-[#999999]"></div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Work, About, Other disappear on small screens */}
        {!isSmallScreen && (
          <>
            {/* Work Dropdown */}
            <div
              className="border border-emerald-500 relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525] cursor-pointer">
                Work
              </p>

              {/* Work Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-[50] pt-[10px] rounded-[15px]">
                  <ul className="border border-amber-600 rounded-[7px]">
                    <li className="rounded-t-[8px] border-t border-l border-r border-transparent w-[176px] bg-[#ffffff] cursor-pointer">
                      <p className="p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 1
                      </p>
                    </li>
                    <li className="pl-2 pr-2 border border-transparent w-[176px] font-medium text-[15px] bg-[#ffffff]">
                      <p className="pt-2 pb-2 font-medium text-[15px] border-y border-[#888888] text-[#888888] hover:text-[#252525] cursor-pointer">
                        Project 2
                      </p>
                    </li>
                    <li className="rounded-b-[8px] border-b border-l border-r border-transparent w-[176px] font-medium text-[15px] bg-[#ffffff] cursor-pointer">
                      <p className="p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 3
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="font-bold text-[15px] text-[#333333] hover:text-[#252525] cursor-pointer">
              About
            </p>
            <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525] cursor-pointer">
              Other
            </p>
            <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525] cursor-pointer">
              <a
                href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </p>
          </>
        )}
      </div>

      {/* Dropdown menu (only appears when isOpen is true) */}
      {isOpen && isSmallScreen && (
        <div className="border border-emerald-500 relative flex flex-col w-full justify-center items-start gap-[10px] pr-[45px] pl-[45px]">
          <ul className="w-full">
            <li className="py-3 flex flex-col gap-1">
              <p className="font-medium text-[15px] text-[#252525] hover:text-[#252525]">
                Work
              </p>
              <p className="pt-1 font-medium text-[15px] text-[#646464] hover:text-[#252525]">
                Project 1
              </p>
              <p className="font-medium text-[15px] text-[#646464] hover:text-[#252525]">
                Project 2
              </p>
              <p className="font-medium text-[15px] text-[#646464] hover:text-[#252525]">
                Project 3
              </p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#000000]">About</p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#252525] hover:text-[#252525]">
                Other
              </p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#252525] hover:text-[#252525]">
                Resume
              </p>
            </li>
          </ul>
        </div>
      )}

      {/* User Info */}
      <br />
      🎓 Student @ The University of Adelaide
      <br />
      😻 Passionate about UX, productivity,
      <br />
      AI, and accessibility

      {/* About Section */}
      <div className="border border-emerald-500 relative w-[80%] flex flex-col h-fit mx-auto justify-center items-center xl:justify-between xl:items-start gap-[20px]">
        <div className="border border-emerald-500 relative flex flex-col xl:flex-row h-fit mx-auto justify-center items-center xl:justify-between xl:items-start">
          <div className="border border-emerald-500 relative w-[100%] xl:w-[40%] flex flex-col justify-center item-center gap-[20px]">
            <div className="border border-emerald-500 relative w-fill h-fit flex justify-items-center">
              <h1 className="font-bold text-[#1a0f0f] text-[22px]">About me</h1>
            </div>

            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
              <div className="rounded-[8px]">
                <Image
                  src="/pixeladam3.png"
                  alt="Picture of Chad"
                  width={100}
                  height={100}
                  className="rounded-[80px] border border-amber-600 bg-gradient-to-r from-purple-500 to-indigo-500"
                />
              </div>
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">My Story</h1>
              <div className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                <p>
                  I’m a curious and collaborative problem-solver who enjoys
                  learning and iterating to take concepts from raw ideas to
                  polished designs, while working within evolving design
                  systems.
                </p>
                <p>
                  I’m drawn to purpose-driven missions focused on making
                  everyday lives easier and sparking positive change.
                </p>
                <p>
                  With a background in software development and UX, I’m
                  bright, determined, and constantly ready to grasp new
                  knowledge.
                </p>
                <p>
                  I like to radiate warmth in my collaboration and
                  communication, and I’ve worked with teams across Product,
                  Engineering, Marketing, and Customer Experience to bring ideas
                  to life.
                </p>
                <p>Thanks for stopping by!</p>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Areas of Interest
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Front-end dev, making AI do cool stuff, UI/UX that actually
                makes sense, travel tech, real-time data magic, fun side
                projects, and making things look good without breaking the
                layout (most of the time).
              </p>
            </div>
          </div>

          {/* How I Work Section */}
          <div className="border border-emerald-500 relative w-[100%] xl:w-[58%] flex flex-col justify-center item-center gap-[20px]">
            <div className="border border-emerald-500 relative w-fill h-fit flex justify-items-center">
              <h1 className="font-bold text-[#1a0f0f] text-[22px] pt-[20px] xl:pt-[0px]">
                How I Work
              </h1>
            </div>

            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Stack
              </h1>
              {/* Add details about your stack */}
            </div>

            {/* Process Lover Section */}
            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Process Lover
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                My passion for UX began during a hackathon, where I deep-dived
                into user research, wireframing, and turning ideas into tangible
                solutions. That reinforced my love for the design process.
              </p>
            </div>

            {/* Data-Driven Section */}
            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Data-Driven
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                With a business degree and a background in marketing analytics,
                I bring a data-driven approach to design, making sure every
                decision is backed by research and user feedback.
              </p>
            </div>

            {/* Design Advocate Section */}
            <div className="bg-[#ffffff] rounded-[16px] border border-emerald-500 relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Design Advocate
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I’m excited about fostering design culture, sharing design
                thinking principles, and bringing diverse teams together to
                create user-centred experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
