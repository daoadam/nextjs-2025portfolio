"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import  EmblaCarousel  from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" }

const SLIDES = [
  "/music.jpg",
  "/twomonkeys.jpg",
  "/perth.jpg",
  "/powerlifting.jpg",
]

const About = () => {
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
    <div className="min-h-screen">
      <div className=" flex w-full gap-[35px] p-[45px] justify-center items-center h-fit">
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-[15px] text-[#333333]">
            adamddao@gmail.com
          </div>

          {/* Button appears only on mobile */}
          {isSmallScreen && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" w-[44px] h-[44px] flex flex-col items-center justify-evenly cursor-pointer"
            >
              {isOpen ? (
                //X Icon
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
              className="relative "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525] cursor-pointer">

                <Link href="/work">
                Work
                </Link>
              </p>

              {/*Work Dropdown Menu*/}
              {isHovered && (
                <div className="absolute z-[50] pt-[10px] rounded-[15px] ">
                  <ul className="border border-amber-600 rounded-[7px]">
                    <li className=" rounded-t-[8px] border-t border-l border-r border-transparent w-[176px] bg-[#ffffff] cursor-pointer">
                      <p className=" p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 1
                      </p>
                    </li>
                    <li className=" pl-2 pr-2 border border-transparent  w-[176px] font-medium text-[15px] bg-[#ffffff]">
                      <p className="pt-2 pb-2 font-medium text-[15px] border-y border-[#888888] text-[#888888] hover:text-[#252525] cursor-pointer">
                        Project 1
                      </p>
                    </li>
                    <li className=" rounded-b-[8px] border-b border-l border-r border-transparent w-[176px] font-medium text-[15px] bg-[#ffffff] cursor-pointer">
                      <p className="p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 1
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
              <Link 
                href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"  
              >Resume</Link>
            </p>
          </>
        )}
      </div>

      {/* Dropdown menu (only appears when isOpen is true) */}
      {isOpen && isSmallScreen && (
        <div className="relative flex flex-col w-full justify-center items-start gap-[10px]5 pr-[45px] pl-[45px]">
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

      <div className=" relative w-[80%] flex flex-col h-fit mx-auto justify-center items-center xl:justify-between xl:items-start gap-[20px]">
        <div className="relative flex flex-col xl:flex-row h-fit mx-auto justify-center items-center xl:justify-between xl:items-start">
          <div className=" relative w-[100%] xl:w-[40%] flex flex-col  justify-center item-center gap-[20px] ">
            <div className="  relative w-fill h-fit flex justify-items-center">
              <h1 className="font-bold text-[#1a0f0f] text-[22px] ">About me</h1>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
              <div className="rounded-[8px]">
                <Image
                  src="/pixeladam3.png"
                  alt="Picture of Chad"
                  width={100}
                  height={100}
                  className="rounded-[80px] border border-amber-600 bg-gradient-to-r from-purple-500 to-indigo-500"
                />
              </div>
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                My Story
              </h1>
              <div className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                <p>
                  I&apos;m a curious and collaborative problem-solver who enjoys
                  learning and iterating to take concepts from raw ideas to
                  polished designs, while working within evolving design
                  systems.
                </p>
                <p>
                  I&apos;m drawn to purpose-driven missions focused on making
                  everyday lives easier and sparking positive change.
                </p>
                <p>
                  With a background in software development and UX, I&apos;m
                  bright, determined, and constantly ready to grasp new
                  knowledge.
                </p>
                <p>
                  I like to radiate warmth in my collaboration and
                  communication, and I&apos;ve worked with teams across Product,
                  Engineering, Marketing, and Customer Experience to bring ideas
                  to life.
                </p>
                <p>Thanks for stopping by!</p>
              </div>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Areas of interest
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Front-end dev, making AI do cool stuff, UI/UX that actually
                makes sense, travel tech, real-time data magic, fun side
                projects, and making things look good without breaking the
                layout (most of the time).
              </p>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Contact me
              </h1>
              <div className="font-medium text-[#312121] text-[15px] flex  gap-[10px] tracking-[-0.2px] leading-[1.2]">
                <Link
                  href="https://www.linkedin.com/in/adamddao/"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>

                <Link
                  href="/https://violet-josselyn-94.tiiny.site/"
                  className="hover:underline"
                >
                  Read.cv
                </Link>

                <Link
                  href="mailto:adamddao@gmail.com"
                  className="hover:underline"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>

          <div className=" relative w-[100%] xl:w-[58%] flex flex-col  justify-center item-center gap-[20px] ">
            <div className="  relative w-fill h-fit flex justify-items-center">
              <h1 className="font-bold text-[#1a0f0f] text-[22px] pt-[20px] xl:pt-[0px]">
                How I work
              </h1>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Stack
              </h1>

              <div className="text-[#312121] grid grid-cols-1 grid-rows-7 xl:grid-cols-2 xl:grid-rows-7 w-[100%]">
                <div className="flex justify-start items-center col-span-1 row-span-1 xl:col-span-2 xl:row-span-1 w-fit">
                  <h1 className="text-[17px] font-medium ">
                    Software Engineering
                  </h1>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/reactIcon.png"
                    alt="react"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-[16px]">React</p>
                    <p className="text-sm font-normal  ">JS Library</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/nextjsIcon.jpeg"
                    alt="nextjs"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Next.js</p>
                    <p className="text-sm font-normal">React Framework</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/tailwindIcon.jpg"
                    alt="tailwind"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Tailwind</p>
                    <p className="text-sm font-normal">CSS Framework</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/pythonIcon.png"
                    alt="python"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Python</p>
                    <p className="text-sm font-normal">Language</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/htmlIcon.png"
                    alt="trinity"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">HTML,CSS,JS</p>
                    <p className="text-sm font-normal">Frontend Trinity</p>
                  </div>
                </div>

                <div className="flex justify-start items-center col-span-1 row-span-1 xl:col-span-2 xl:row-span-1">
                  <h1 className="text-[17px] font-medium ">User Experience </h1>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/figmaIcon.png"
                    alt="figma"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Figma</p>
                    <p className="text-sm font-normal">Design</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/miroIcon.png"
                    alt="miro"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Miro</p>
                    <p className="text-sm font-normal">Whiteboarding</p>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 xl:col-span-1 xl:row-span-1 flex justify-start gap-2 items-start">
                  <Image
                    src="/whimsicalIcon.jpg"
                    alt="whimsical"
                    width={1240}
                    height={1240}
                    className="w-12 h-12 object-cover rounded-full border-5 flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium  text-[16px]">Whimsical</p>
                    <p className="text-sm font-normal">Wireframing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Process lover
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                My passion for UX began during a hackathon, where I deep-dived
                into user research, wireframing, and turning ideas into tangible
                solutions. That reinforced my love for the design process — an
                approach I continue to refine by balancing creativity, strategy,
                and user needs.
              </p>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Data-driven
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                With a business degree and a background in marketing analytics,
                I bring a data-driven approach to design, making sure every
                decision is backed by research and user feedback.
              </p>
            </div>

            <div className=" bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
                Design advocate
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I&apos;m excited about fostering design culture, sharing design
                thinking principles, and bringing diverse teams together to
                create user-centred experiences.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white flex flex-col items-start p-[20px] w-full rounded-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200 ">
          <h1 className="text-[22px] font-semibold mb-5 text-[#1a0f0f]">When not working...</h1>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default About;