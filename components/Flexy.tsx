"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";

const Flexy = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="min-h-screen overflow-visible">
      <div className="flex w-full gap-[35px] p-[45px] justify-center items-center h-fit overflow-visible">
        <div className="flex justify-between items-center w-full overflow-visible">
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
              className=" relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <p className="font-bold text-[15px] text-[#333333] hover:text-[#252525] cursor-pointer">
                Work
              </p>

              {/* Work Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-[50] pt-[10px] rounded-[15px]">
                  <ul className=" rounded-[7px]">
                    <li className="rounded-t-[8px] border-t border-l border-r border-transparent w-[176px] bg-[#ffffff] cursor-pointer">
                      <p className="p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Flexy
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
            <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525] cursor-pointer">
              <Link href="/about">About</Link>
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
        <div className=" relative flex flex-col w-full justify-center items-start gap-[10px] pr-[45px] pl-[45px]">
          <ul className="w-full">
            <li className="py-3 flex flex-col gap-1">
              <p className="font-medium text-[15px] text-[#252525] hover:text-[#252525]">
                Work
              </p>
              <p className="pt-1 font-medium text-[15px] text-[#646464] hover:text-[#252525]">
                Flexy
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

      {/* About Section */}
      <div className="  relative w-[90%] flex flex-col h-fit mx-auto justify-center items-center xl:justify-between xl:items-start gap-[20px] overflow-visible">
        <div
          className="0 relative flex flex-col xl:flex-row h-fit mx-auto justify-center items-center xl:justify-between xl:items-start overflow-visible "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className=" hidden xl:flex xl:sticky top-[30px] w-[100%] xl:w-[20%]  flex-col  justify-center item-center gap-[20px] ">
            

            <div className=" bg-white rounded-[20px] overflow-hidden">
              
              <div className=" bg-[#ffffff] relative w-fill h-fit flex flex-col justify-items-center gap-[20px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
                

                <div className="flex flex-col justify-start items-start h-fit w-full gap-[10px] ">
                  <button className="flex justify-center items-start h-[30px] w-[30px]  rounded-full bg-[#f3f3f3]">
                    <Link href="https://www.linkedin.com/in/adamddao/">
                      <Image
                        src="/arrow.png"
                        alt="arrowleft"
                        width={30}
                        height={30}
                        className="scale-70"
                      />
                    </Link>
                  </button>

                <div className="font-medium text-[#000000] text-[15px]  gap-[10px]">
                    <p>WhereNow? Web App</p>
                </div>

                <div className="flex flex-col text-[15px] font-medium text-[#8a8a8a] gap-[10px] pt-[10px]">
                    
                        <p>Overview</p>
                        <p>Research & Insight</p>
                        <p>Defining the problem & MVP</p>
                        <p>Testing & User feedback</p>
                        <p>Implementation & Features</p>
                        <p>Outcomes</p>
                    
                </div>

                <div className="w-full h-[1px] bg-[#8a8a8a]">

                </div>

                <div className="font-medium text-[#000000] text-[15px]  gap-[10px]">
                    <p>Next: Project 2</p>
                </div>

                  
                
                </div>
              </div>
            </div>
          </div>

          <div className=" relative w-[100%] xl:w-[75%] flex flex-col justify-center item-center gap-[20px]">
            <Image
              src=""
              alt=""
              height={100}
              width={500}
              className="w-full h-auto rounded-[20px] "
            />

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-bold text-[#1a0f0f] text-[22px] pt-[20px] xl:pt-[0px]">
                Selected Works
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex flex-wrap w-full justify-between items-center">
                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Role
                  </p>
                  <p className="text-[#000000] text-[15px] font-medium w-fit h-fit">
                    Designer & Front End
                  </p>
                </div>

                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Duration
                  </p>
                  <p className="text-[#000000] text-[15px] font-medium w-fit h-fit">
                    Mar - Aug 2025
                  </p>
                </div>

                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Platform
                  </p>
                  <p className="text-[#000000] text-[15px] font-medium w-fit h-fit">
                    Mobile & Web
                  </p>
                </div>

                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Collaborators
                  </p>
                  <div className="flex flex-wrap gap-[8px]">
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center"></div>
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center"></div>
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center"></div>
                  </div>
                </div>
              </div>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Overview
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                My Role
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px] pt-[20px] xl:pt-[0px]">
                Resarch & Insights
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px] pt-[20px] xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Experience designing and developing interactive web
                    applications, with a focus on user-friendly and scalable
                    interfaces.
                  </li>
                  <li>
                    Skilled in conducting UX research, including user surveys,
                    interviews, and usability testing, to enhance product design
                    decisions.
                  </li>
                  <li>
                    Proficient in front-end development, interaction design, and
                    maintaining consistency within evolving design systems.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Significance
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px] pt-[20px] xl:pt-[0px]">
                Defining the problem & MVP
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px] pt-[20px] xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Experience designing and developing interactive web
                    applications, with a focus on user-friendly and scalable
                    interfaces.
                  </li>
                  <li>
                    Skilled in conducting UX research, including user surveys,
                    interviews, and usability testing, to enhance product design
                    decisions.
                  </li>
                  <li>
                    Proficient in front-end development, interaction design, and
                    maintaining consistency within evolving design systems.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Significance
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px] pt-[20px] xl:pt-[0px]">
                Testing & User feedback
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px] pt-[20px] xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Experience designing and developing interactive web
                    applications, with a focus on user-friendly and scalable
                    interfaces.
                  </li>
                  <li>
                    Skilled in conducting UX research, including user surveys,
                    interviews, and usability testing, to enhance product design
                    decisions.
                  </li>
                  <li>
                    Proficient in front-end development, interaction design, and
                    maintaining consistency within evolving design systems.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Significance
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px] pt-[20px] xl:pt-[0px]">
                Implementation & Features
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px] pt-[20px] xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Experience designing and developing interactive web
                    applications, with a focus on user-friendly and scalable
                    interfaces.
                  </li>
                  <li>
                    Skilled in conducting UX research, including user surveys,
                    interviews, and usability testing, to enhance product design
                    decisions.
                  </li>
                  <li>
                    Proficient in front-end development, interaction design, and
                    maintaining consistency within evolving design systems.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Significance
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px] pt-[20px] xl:pt-[0px]">
                Outcomes & Future Improvements
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px] pt-[20px] xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Experience designing and developing interactive web
                    applications, with a focus on user-friendly and scalable
                    interfaces.
                  </li>
                  <li>
                    Skilled in conducting UX research, including user surveys,
                    interviews, and usability testing, to enhance product design
                    decisions.
                  </li>
                  <li>
                    Proficient in front-end development, interaction design, and
                    maintaining consistency within evolving design systems.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px] pt-[20px] xl:pt-[0px]">
                Significance
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. Skilled in conducting UX research, including user
                surveys, interviews, and usability testing, to enhance product
                design decisions. Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>

              <Image
                src=""
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-center font-medium text-[15px] py-[40px] text-[#888888] h-fit w-full">
        <p>Adam Dao © 2025</p>
      </div>
    </div>
  );
};

export default Flexy;
