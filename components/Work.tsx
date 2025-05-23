"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";

const Work = () => {
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
                        <Link href="/wherenow">WhereNow</Link>
                      </p>
                    </li>
                    <li className="pl-2 pr-2 border border-transparent w-[176px] font-medium text-[15px] bg-[#ffffff]">
                      <p className="pt-2 pb-2 font-medium text-[15px] border-y border-[#888888] text-[#888888] hover:text-[#252525] cursor-pointer">
                        <Link href="/flexy">Flexy</Link>
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
              <a
                href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link
                  href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
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
                <Link href="/wherenow">WhereNow</Link>
              </p>
              <p className="font-medium text-[15px] text-[#646464] hover:text-[#252525]">
                <Link href="/flexy">Flexy</Link>
              </p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#000000]">About</p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3"></li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#252525] hover:text-[#252525]">
                <Link
                  href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </p>
            </li>
          </ul>
        </div>
      )}

      {/* About Section */}
      <div className="relative w-[90%] flex flex-col h-fit mx-auto justify-center items-center xl:justify-between xl:items-start gap-[20px] overflow-visible">
        <div
          className=" relative flex flex-col xl:flex-row h-fit mx-auto justify-center items-center xl:justify-between xl:items-start overflow-visible "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className=" xl:sticky xl:top-[30px] w-[100%] xl:w-[33%] flex flex-col  justify-center item-center gap-[20px] ">
            <div className="absolute top-[91px] left-[20px] w-[64px] h-[64px] bg-white z-[1] rounded-full">
              <Icon isHovered={isHovered} />
            </div>

            <div className=" bg-white rounded-[20px] overflow-hidden">
              <div className="relative w-full h-[132px] overflow-hidden bg-gradient-to-br from-[#c3e0d4] via-[#fffde6] to-[#faf3e6]"></div>
              <div className=" bg-[#ffffff] relative w-full h-fit flex flex-col justify-items-center gap-[20px] p-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200">
                <div className="flex flex-col gap-[5px]">
                  <h1 className="font-bold text-[#312121] text-[24px] flex flex-col mt-[10px] tracking-[-0.6px] leading-[1.2]">
                    Hi I&apos;m Adam
                  </h1>

                  <div className="font-medium text-[#686868] text-[15px] flex flex-col tracking-[-0.6px] leading-[1.2]">
                    📍 Adelaide, SA
                  </div>
                </div>

                <div className="font-medium text-[#312121] text-[15px] flex flex-col gap-[1px] tracking-[-0.6px] leading-[1.2]">
                  <p>🧑‍💻 Product designer & Full-Stack Engineer.</p>
                  <p>🎓 Student @ The University of Adelaide.</p>
                  <p>
                    😻 Passionate about UX, productivity, AI, and accessibility.
                  </p>
                </div>

                <div className="flex justify-start items-center h-fit w-full gap-[10px] ">
                  <button className="flex justify-center items-center h-[40px] w-[40px]  rounded-full bg-[#f3f3f3]">
                    <Link href="https://www.linkedin.com/in/adamddao/">
                      <Image
                        src="/linked2.png"
                        alt="Linkedin"
                        width={40}
                        height={40}
                        className="scale-60"
                      />
                    </Link>
                  </button>
                  <button className="flex justify-center items-center h-[40px] w-[40px]  rounded-full bg-[#f3f3f3]">
                    <Link href="mailto:adamddao@gmail.com">
                      <Image
                        src="/gmail2.png"
                        alt="gmail"
                        width={40}
                        height={40}
                        className="scale-60"
                      />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative w-[100%] xl:w-[65%] flex flex-col justify-center item-center gap-[20px]">
            <div className=" relative w-full h-fit flex justify-items-center">
              <h1 className="font-bold text-[#1a0f0f] text-[22px] pt-[20px] xl:pt-[0px]">
                Selected Works
              </h1>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                • Experience designing and developing interactive web
                applications, with a focus on user-friendly and scalable
                interfaces. <br /> <br />
                • Skilled in conducting UX research, including user surveys,
                interviews, and usability testing, to enhance product design
                decisions. <br /> <br />• Proficient in front-end development,
                interaction design, and maintaining consistency within evolving
                design systems.
              </p>
            </div>

            <Link href="/wherenow">
              <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center p-[20px]  shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
                <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] leading-[1.2] h-fit">
                  WhereNow?
                </p>
                <h1 className="font-semibold text-[#1a0f0f] text-[18px] pb-[8px] h-fit">
                  Web App
                </h1>
                <p className="text-[15px] font-medium text-[#312121] tracking-tight leading-[1.2] pb-[10px]">
                  I developed and pitched a travel-companion web app for the
                  UofA Tech e-Challenge, presenting it to a panel of judges.
                  Conducted research, wireframing, and high-fidelity mockups,
                  then built a responsive, accessible, and high-performance
                  platform. Currently working on acquiring users and refining
                  the experience based on feedback.
                </p>

                <div className="flex gap-[10px] pb-[20px]  w-fill flex-wrap ">
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    User Research
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    UX/UI Design
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    React
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    Next.js
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    Tailwind CSS
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#ff0099] bg-[#fff2ff]">
                    Python
                  </button>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/WhereNowThumb.jpg"
                    alt=""
                    height={50000}
                    width={50000}
                    className="w-full h-auto rounded-[20px]"
                  />
                </div>
              </div>
            </Link>

            <Link href="/flexy">
              <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center p-[20px]  shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
                <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] leading-[1.2] h-fit">
                  Flexy
                </p>
                <h1 className="font-semibold text-[#1a0f0f] text-[18px] pb-[8px] h-fit">
                  Mobile App
                </h1>
                <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] pb-[10px] leading-[1.2] h-fit">
                  I conducted UX research and designed lo-fi and hi-fi
                  wireframes for Flexy, a beauty and wellness booking platform,
                  leading to a 20% increase in user comfort with the UI through
                  iterative design and experimental surveying.
                </p>

                <div className="flex gap-[10px] pb-[20px]  w-fill flex-wrap ">
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#190073] bg-[#f3f2f8]">
                    User Research
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#190073] bg-[#f3f2f8]">
                    UX/UI Design
                  </button>
                  <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#190073] bg-[#f3f2f8]">
                    Figma
                  </button>
                </div>

                <Image
                  src="/flexyWork.png"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-full h-auto rounded-[20px] "
                />
              </div>
            </Link>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center p-[20px]  shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] leading-[1.2] h-fit">
                Amazon
              </p>
              <h1 className="font-semibold text-[#1a0f0f] text-[18px] pb-[8px] h-fit">
                Website Imitation
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] pb-[10px] leading-[1.2] h-fit">
                Rebuilt Amazon’s home screen, checkout, and tracking system from
                scratch.
              </p>

              <div className="flex gap-[10px] pb-[20px]  w-fill flex-wrap ">
                <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#00748a] bg-[#ebfafa]">
                  HTML, CSS, Javascript
                </button>
                <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#00748a] bg-[#ebfafa]">
                  UX/UI Design
                </button>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/notready.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-[50%]"
                />
              </div>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center p-[20px]  shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] leading-[1.2] h-fit">
                XConvenience
              </p>
              <h1 className="font-semibold text-[#1a0f0f] text-[18px] pb-[8px] h-fit">
                Website Redesign
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col tracking-[-0.2px] pb-[10px] leading-[1.2] h-fit">
                I presented my website redesign concept to the stakeholders of
                XConvenience, ensuring it aligned with the best UX practices.
              </p>

              <div className="flex gap-[10px] pb-[20px]  w-fill flex-wrap ">
                <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#6600ff] bg-[#f8f3ff]">
                  User Research
                </button>

                <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#6600ff] bg-[#f8f3ff]">
                  UX/UI Design
                </button>

                <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#6600ff] bg-[#f8f3ff]">
                  Figma
                </button>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/notready.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-[50%]"
                />
              </div>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center p-[20px]  shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <p className="text-[15px] font-medium text-[#312121] tracking-tight leading-[1.2]">
                Jigen
              </p>

              <h1 className="text-[18px] font-semibold text-[#1a0f0f] pb-[8px]">
                Catering Restaurant Website
              </h1>

              <p className="text-[15px] font-medium text-[#312121] tracking-tight leading-[1.2] pb-[10px]">
                Designed and developed a catering website for Jigen,
                streamlining online ordering and enhancing the user experience.
              </p>

              <div className="flex gap-[10px] pb-[20px]  w-fill flex-wrap ">
                <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#cc0033] bg-[#ffe5e5]">
                  User Research
                </button>
                <button className="font-medium rounded-[8px] px-[12px] py-[3px] w-fit text-[14px] text-[#cc0033] bg-[#ffe5e5]">
                  UX/UI Design
                </button>

                <button className="font-medium rounded-[8px] px-[12px] py-[3px]  w-fit text-[14px] text-[#cc0033] bg-[#ffe5e5]">
                  Figma
                </button>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/notready.png"
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-[50%]"
                />
              </div>
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

export default Work;
