"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
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
      <div className="border border-purple-600 flex w-full gap-[35px] p-[45px] justify-center items-center h-fit">
        <div className="flex justify-between items-center w-full">
          <div className="font-bold text-[15px] text-[#333333]">
            adamddao@gmail.com
          </div>

          {/* Button appears only on mobile */}
          {isSmallScreen && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="border border-amber-600 w-[44px] h-[44px] flex flex-col items-center justify-evenly cursor-pointer"
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
              <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525]">
                Work
              </p>

              {/*Work Dropdown Menu*/}
              {isHovered && (
                <div className="absolute pt-[10px] rounded-[15px]">
                  <ul>
                    <li className=" rounded-t-[8px] border-t border-l border-r border-transparent w-[176px] bg-[#ffffff]">
                      <p className=" p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 1
                      </p>
                    </li>
                    <li className=" pl-2 pr-2 border border-transparent  w-[176px] font-medium text-[15px] bg-[#ffffff]">
                      <p className="pt-2 pb-2 font-medium text-[15px] border-y border-[#888888] text-[#888888] hover:text-[#252525]">
                        Project 1
                      </p>
                    </li>
                    <li className=" rounded-b-[8px] border-b border-l border-r border-transparent w-[176px] font-medium text-[15px] bg-[#ffffff]">
                      <p className="p-2 font-medium text-[15px] text-[#888888] hover:text-[#252525]">
                        Project 1
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="font-bold text-[15px] text-[#333333] hover:text-[#252525]">
              About
            </p>
            <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525]">
              Other
            </p>
            <p className="font-bold text-[15px] text-[#888888] hover:text-[#252525]">
              Resume
            </p>
          </>
        )}
      </div>

      {/* Dropdown menu (only appears when isOpen is true) */}
      {isOpen && isSmallScreen && (
        <div className="relative flex flex-col w-full justify-center items-start gap-35 pr-[45px] pl-[45px]">
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

      <div className="border border-blue-600 relative w-[80%] flex flex-col lg:flex-row h-fit mx-auto justify-center items-center lg:justify-between lg:items-start">
        <div className="border border-amber-600 relative w-[100%] lg:w-[48%] flex flex-col  justify-center item-center gap-[20px] ">
          <div className="border border-red-600  relative w-fill h-fit flex justify-items-center">
            <h1 className="font-semibold font-[#888888] text-[22px] text-black">
              About me
            </h1>
          </div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]">
            <div className="rounded-[8px]">
              <Image
                src="/ZoomAdam.jpg"
                alt="Picture of Chad"
                width={150}
                height={100}
                className="rounded-[80px]"
              />
            </div>
            <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
              My Story
            </h1>
            <div className="font-medium text-[#312121] text-[15px] flex flex-col gap-3 tracking-[-0.2px] leading-[1.2]">
              <p>
                I&apos;m a curious and collaborative problem-solver who enjoys
                learning and iterating to take concepts from raw ideas to
                polished designs, while working within evolving design systems.
              </p>
              <p>
                I&apos;m drawn to purpose-driven missions focused on making
                everyday lives easier and sparking positive change.
              </p>
              <p>
                With a background in software development and UX, I&apos;m
                bright, determined, and constantly ready to grasp new knowledge.
              </p>
              <p>
                I like to radiate warmth in my collaboration and communication,
                and I&apos;ve worked with teams across Product, Engineering,
                Marketing, and Customer Experience to bring ideas to life.
              </p>
              <p>Thanks for stopping by!</p>
            </div>
          </div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]">
            <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
              Areas of interest
            </h1>
            <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-3 tracking-[-0.2px] leading-[1.2]">
              Design systems, accessibility, AI, productivity, and financial
              empowerment
            </p>
          </div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]">
            <h1 className="font-semibold text-[#1a0f0f] text-[18px]">
              Contact me
            </h1>
            <div className="font-medium text-[#312121] text-[15px] flex flex-col gap-3 tracking-[-0.2px] leading-[1.2]">
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

        <div className="border border-amber-600 relative w-[100%] lg:w-[48%] flex flex-col  justify-center item-center gap-[20px] ">
          <div className="border border-red-600  relative w-fill h-fit flex justify-items-center">
            <h1 className="font-semibold font-[#888888] text-[22px] text-black">
              How I work
            </h1>
          </div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]">
            <h1 className="font-semibold text-[#1a0f0f] text-[18px]">Stack</h1>

            <div className="text-black grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-7">
              <div className="flex justify-start items-center col-span-1 row-span-1 md:col-span-2 md:row-span-1">
                <h1 className="text-lg font-semibold ">
                  Software Engineering:{" "}
                </h1>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/reactIcon.png"
                  alt="react"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-base">React</p>
                  <p className="text-sm">JS Library</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/nextjsIcon.jpeg"
                  alt="nextjs"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Next.js</p>
                  <p className="text-sm">React Framework</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/tailwindIcon.jpg"
                  alt="tailwind"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Tailwind</p>
                  <p className="text-sm">CSS Framework</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/pythonIcon.png"
                  alt="python"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Python</p>
                  <p className="text-sm">Language</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/htmlIcon.png"
                  alt="trinity"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">HTML,CSS,JS</p>
                  <p className="text-sm">Frontend Trinity</p>
                </div>
              </div>

              <div className="flex justify-start items-center col-span-1 row-span-1 md:col-span-2 md:row-span-1">
                <h1 className="text-lg font-semibold ">User Experience: </h1>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/figmaIcon.png"
                  alt="figma"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Figma</p>
                  <p className="text-sm">Design</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/miroIcon.png"
                  alt="miro"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Miro</p>
                  <p className="text-sm">Whiteboarding</p>
                </div>
              </div>

              <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-1 flex justify-start gap-2 items-start">
                <Image
                  src="/whimsicalIcon.jpg"
                  alt="whimsical"
                  width={1240}
                  height={1240}
                  className="w-12 h-12 object-cover rounded-full border-10 flex items-center justify-center"
                />
                <div className="flex flex-col">
                  <p className="font-medium  text-base">Whimsical</p>
                  <p className="text-sm">Wireframing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]"></div>

          <div className="border border-red-600 bg-[#ffffff] rounded-[16px] relative w-fill h-fit flex flex-col justify-items-center gap-3 p-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;