"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

const SLIDES = [
  "/WhereNow1.png",
  "/WhereNow2.png",
  "/WhereNow3.png",
  "/WhereNow4.png",
  "/WhereNow5.png",
  "/WhereNow6.png",
  "/WhereNow7.png",
];

const WhereNow = () => {
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

  useEffect(() => {
    if (isHovered) {
      // Just referencing isHovered so the warning disappears
    }
  }, [isHovered]);

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
                      <p className="pt-2 pb-2 font-medium text-[15px] border-y  text-[#888888] hover:text-[#252525] cursor-pointer">
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
              <Link
                href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
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
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <p className="font-medium text-[15px] text-[#000000]">About</p>
            </li>

            <li className="border-t border-[#8b8b8b] py-3">
              <Link
                href="https://docs.google.com/document/d/13yIsupujsWupLxjXvPQ-OuslObz2rOOAjm9TGrWfs6Y/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
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
                    <Link href="/work">
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
                    <p
                      onClick={() =>
                        document
                          .getElementById("flexymobileapp")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      WhereNow Mobile App
                    </p>
                  </div>

                  <div className="flex flex-col text-[15px] font-medium text-[#8a8a8a] gap-[10px] pt-[10px]">
                    <p
                      className="hover:text-[#000000] cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById("mvp")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Defining the problem & MVP
                    </p>

                    <p
                      className="hover:text-[#000000] cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById("research")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Research & Insight
                    </p>

                    <p
                      className="hover:text-[#000000] cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById("testing")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Testing & User feedback
                    </p>

                    <p
                      className="hover:text-[#000000] cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById("outcomes")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Outcomes
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-[#8a8a8a]"></div>

                  <div className="font-medium text-[#000000] text-[15px]  gap-[10px]">
                    <p>Next: Project 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative w-[100%] xl:w-[75%] flex flex-col justify-center item-center gap-[20px]  ">
            <div className=" bg-[#ffffff] flex flex-col items-start p-[20px] w-full rounded-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200  ">
              <EmblaCarousel
                slides={SLIDES}
                options={OPTIONS}
                style={{
                  maxWidth: "60rem",
                  margin: "auto",
                  height: "100%",
                  "--slide-height": "%",
                  "--slide-spacing": "1rem",
                  "--slide-size": "40%",
                }}
              />
            </div>

            <div
              id="flexymobileapp"
              className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200"
            >
              <h1 className="font-bold text-[#1a0f0f] text-[22px]  xl:pt-[0px]">
                WhereNow Mobile App
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                As part of the eTech challenge hosted by the University of
                Adelaide. My team and I had the opportunity to design and
                develop a mobile application for the WhereNow platform.
                <br />
                <br />I was responsible for the user research, design and
                development of the mobile app. I focused on conducting
                meaningful user research to understand the needs and
                expectations of users who would use a travelling companion app.
                <br />
                <br />
                I conceptually thought of the original functions that were
                required to answer the basic needs of users.
                <br />
                <br />
                I designed the lo-fi and hi-fi wireframes for the app, ensuring
                that the user interface was intuitive and easy to navigate.
                <br />
                <br />A constant feedback loop will be utilised halfway through
                this project to allow rapid iteration cycles and refine the
                design based on user feedback. The app will be co-developed by
                me focusing on the front-end development.
              </p>

              <div className="flex flex-wrap w-full justify-between items-center">
                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Role
                  </p>
                  <p className="text-[#000000] text-[15px] font-medium w-fit h-fit">
                    Researcher, Designer & Front End
                  </p>
                </div>

                <div className="flex flex-col w-fit h-fit">
                  <p className="text-[#808080] text-[15px] font-medium w-fit h-fit">
                    Duration
                  </p>
                  <p className="text-[#000000] text-[15px] font-medium w-fit h-fit">
                    Mar - Jun 2025
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
                  <div className="flex flex-wrap gap-[5px]">
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center">
                      <Image
                        src="/adam.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        className="h-[32px] w-[32px] rounded-full"
                      />
                    </div>
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center">
                      <Image
                        src="/nlinleh.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        className="h-[32px] w-[32px] rounded-full"
                      />
                    </div>
                    <div className="border rounded-full h-[32px] w-[32px] flex justify-center items-center">
                      <Image
                        src="/david.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        className="h-[32px] w-[32px] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex bg-black h-[1px] w-fill my-[20px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Context
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                WhereNow is a mobile app designed to make spontaneous trip
                planning fast, effortless, and personalized. Built for travelers
                who want to explore new places based on time, weather, and vibe
                — not endless tabs and spreadsheets.
                <br /> <br />
                With real-time itinerary updates, smart suggestions, and
                budget-aware options, WhereNow acts as your flexible co-pilot
                for stress-free travel.
                <br /> <br />
                Through research and iterative design, I led efforts to improve
                the travel planning experience — focusing on reducing decision
                fatigue, enabling real-time itinerary flexibility, and helping
                users confidently explore options that matched their vibe,
                budget, and timing.”
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                My Role
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I am the lead researcher, designer and co-developer on the team.
                My team includes a marketing major and another software
                developer.
              </p>
            </div>

            <div
              id="mvp"
              className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200"
            >
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Defining the problem & MVP
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] pb-[10px] tracking-[-0.2px] leading-[1.2]">
                Planning spontaneous trips is frustrating, especially when time
                is limited or conditions like weather and availability keep
                changing.
                <br /> <br />
                Many travel tools overwhelm users with too many options or
                require manual effort, without offering real-time updates or
                personalized suggestions.
                <br /> <br />
                Users need a smarter, faster way to plan — with real-time
                recommendations, minimal input, and flexible itineraries that
                adapt to their vibe, budget, and time.
              </p>

              <div className="flex p-[20px] text-[15px] font-normal justify-start items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  &quot;I want to make the most of my trips without spending
                  hours planning. Just tell me where to go and what&apos;s
                  good!&quot; <br />- Vanessa
                </p>
              </div>

              <div className="flex p-[20px] text-[15px] font-normal justify-start items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  &quot;I love planning my trips down to the last detail, but I
                  wish it didn&apos;t take so much effort !&quot; <br />-
                  Isabelle
                </p>
              </div>

              <div className="flex p-[20px] text-[15px] font-normal justify-start items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  &quot;I want to explore new places without breaking the
                  bank.&quot; <br />- Samuel
                </p>
              </div>

              <div className="flex bg-black h-[1px] w-fill my-[20px]"></div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Affinity Mapping
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                To kick off the problem discovery phase, I synthesized user
                research insights into themes using affinity mapping. There were
                three main themes and almost character traits that emerged.
                <br />
                <br />
                Each theme had its own set of sticky notes. These sticky note
                represented a pain point, need, or opportunity that came up
                during interviews, persona development, and journey mapping.
              </p>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAffinityMapVanessa.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[75%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAffinityMapIsabelle.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[75%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAffinityMapSamuel.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[75%]"
                />
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Feature Prioritization Map
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                After clustering patterns, these stickies were then
                stratetgically placed onto a feature prioritization map for
                impact vs feasability.
                <br />
                <br />
                We prioritized features that were:
                <br />
                <br />
                Low effort, high reward (e.g., budget-tracker, in-built
                directions with map navigation button)
                <br />
                <br />
                High effort, high reward (e.g., real-time itinerary updates,
                video guides for popular places, reviews)
                <br />
                <br />
                Deferred high-effort, low-reward ideas like flagging ambitious
                schedules or re-rolling your itinerary.
              </p>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowFTM2.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[120%]"
                />
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Key features for the MVP
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Researching our target users and competitors revealed a clear
                gap in the travel planning space — especially for spontaneous
                travelers who want flexibility without the stress. This analysis
                shaped the foundation of WhereNow: a smart, centralized platform
                that combines real-time destination discovery, itinerary
                flexibility, and personalized suggestions — all with minimal
                effort from the user.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    People want quick-start planning — minimal effort, no long
                    forms.
                  </li>
                  <li>
                    Real-time conditions like weather and availability play a
                    big role in trip decisions.
                  </li>
                  <li>
                    Users like automation, but only if they can still edit or
                    override parts of their plan.
                  </li>
                  <li>
                    Budget tracking with alerts and breakdowns are imperitive to
                    users.
                  </li>
                  <li>
                    Tagging and categorization of services makes it easier to
                    find what you need. This also helps software AI be able to
                    differentiate between services.
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="research"
              className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200"
            >
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                User Research & Insights
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                To understand the real pain points behind trip planning, I
                conducted user interviews within the e-Tech challenge cohort
                with online Google-forms and synthesized findings into three
                distinct personas — each representing a key user type with
                unique travel goals and frustrations.
              </p>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Surveys
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                To support qualitative interviews and persona development, I ran
                a short survey with 30 participants aged 18–34 who travel at
                least once a year. The goal was to uncover key behaviors,
                frustrations, and priorities when it comes to spontaneous trip
                planning.
              </p>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowPiChart.png"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[120%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Significance
              </h1>

              <div className="flex flex-row flex-wrap w-full justify-center gap-[10px]">
                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    40% of respondents use travel apps, but 30% still rely on
                    manual Googling <br />
                    <br />
                    suggesting a lack of trust in existing tools or friction in
                    their UX.
                  </p>
                </div>

                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    Too many choices (35%) and time-consuming planning (25%)
                    were the biggest pain points, <br />
                    <br />
                    echoing the need for a simplified planning experience.
                  </p>
                </div>
                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    Budget (30%) and weather (25%) were the top considerations
                    when deciding where to go <br /> <br />
                    reinforcing the idea that a real-time, filtered suggestion
                    engine could make decision-making easier and smarter.
                  </p>
                </div>

                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    Only 10% were comfortable traveling without planning <br />{" "}
                    <br />
                    showing a real need for light, fast structure.
                  </p>
                </div>
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                User Personas
              </h1>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserPersonaVanessa.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[120%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WherenowUserPersonaIsabelle.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[120%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserPersonaSamuel.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[120%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                User Flow
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] my-[20px] leading-[1.2]">
                After developing personas, I mapped their typical travel
                planning journeys to uncover stress points and moments of
                opportunity. These were the initial userflows created before any
                wireframes based off qualitative research. Updated userflows
                have not been implemented yet.
              </p>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserFlowInitial.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserFlowLogin.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserFlowOnboarding.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[100%]"
                />
              </div>
              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserFlowHome.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowUserFlowItinerary.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[100%]"
                />
              </div>
            </div>

            <div
              id="testing"
              className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200"
            >
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Testing & User feedback
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Initial Prototypes
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Rather than starting with rough sketches, I began by
                establishing a foundational design system — focusing on
                typography, color palette, spacing, and visual consistency. This
                helped create a cohesive experience from the start and allowed
                me to move faster during high-fidelity screen design and
                prototyping. These early designs were then tested with users to
                validate both flow and interface clarity. The process was
                iterative, with key screens evolving based on user feedback.
              </p>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Key design choices:
              </p>
              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-disc items-start">
                  <li>
                    🗺️ Itinerary Page - A dynamic, real-time itinerary that
                    users could personalize — lock in key events, swap out
                    flexible items, or reroll entire days based on updated
                    weather or mood.
                  </li>
                  <li>
                    📍Navigation Page - This page showed destinations and
                    experiences near the user&apos;s location or a selected
                    city. Users could filter results by vibe, budget, or
                    distance — helping them explore what&apos;s nearby at a
                    glance.
                  </li>
                  <li>
                    ⭐ Reviews Page - An experience-focused review system
                    showing real photos and vibe tags from other travelers. I
                    prioritized clarity and honesty over 5-star rating noise.
                  </li>

                  <li>
                    🎥 Video Guides Page - Short-form travel content (like
                    TikToks or Reels) embedded to help users preview spots
                    before visiting. This made the experience more engaging and
                    visually driven.
                  </li>

                  <li>
                    ⚙️ Settings Page - Focused on lightweight control — letting
                    users adjust distance limits, budget caps, and default
                    preferences without digging through menus.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Lo-fi Wireframes
              </h1>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowLofi1.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowLofi2.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowLofi3.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowLofi41.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Hi-fi Wireframes
              </h1>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowHiFi1.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowHiFi2.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowHifi3.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowHifi4.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                A/B Testing
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                For the WhereNow travel app, I designed and ran three targeted
                A/B tests focused on improving user navigation, trip planning
                efficiency, and overall usability:
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Calender View Optimization
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
              Old: Users could only switch between two days at a time. <br/>
              New (Test): A week-view scrolling calendar was introduced to give users better visibility over their full itinerary.
              </p>

              <div className="bg-[#f2f7fc] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#6d7c9c] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-disc items-start">
                  <li>
                  Goal: Reduce friction when planning multi-day trips and encourage deeper engagement.
                  </li>
                  <li>
                  Metric Tracked: Number of days viewed, edits on days beyond Day 2, and session duration on itinerary screen.
                  </li>
                </ul>
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAB1.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
              Improved Bottom Navigation Clarity
              </h1>

              <div className="bg-[#f2f7fc] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#6d7c9c] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-disc items-start">
                  <li>
                  Goal: Help first-time users understand the app layout more quickly.
                  </li>
                  <li>
                  Metric Tracked: Time to first action, navigation errors, and completion rate of key flows.
                  </li>
                </ul>
              </div>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
              Old: Bottom nav used icons only. <br/>
              New (Test): Text labels were added below each icon (e.g., Home, Map, Plan, Settings).
              </p>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAB3.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
              Floating Action Button (FAB) Redesign
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
              Old: Tapping the + icon led to a full-screen decision page: “Create your own” vs. “Use AI Magic.” <br/>
              New (Test): Introduced a quick-access floating menu that lets users instantly choose between Trip Plan and Guide.
              </p>
              <div className="bg-[#f2f7fc] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#6d7c9c] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-disc items-start">
                  <li>
                  Goal: Streamline the creation flow and reduce drop-off from the decision screen.
                  </li>
                  <li>
                  Metric Tracked: Click-through rates for each FAB option, trip creation starts, and plan completion rate.
                  </li>
                </ul>
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/WhereNowAB2.jpg"
                  alt=""
                  height={50000}
                  width={50000}
                  className="w-[100%]"
                />
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Improvements Based on Feedback
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Running user tests and examining the early prototypes sparked
                productive discussions within the team, which helped us to
                identify pain points and determine our desired visual direction.
                We are planning to do some A/B testing to evaluate the impact of
                these changes whilst still fitting the timeline.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>Users preferred when the home page is less cluttered</li>
                  <li>
                    Users expect the map to be accessible via the bottom
                    navigation bar.
                  </li>
                  <li>Too many options in the footer leading to confusion</li>
                  <li>Footer icons are too thick</li>
                  <li>
                    The specificity buttons are distracting and take away from
                    the experience
                  </li>
                  <li>
                    Bottom Nav bar should include headers as just icons is not
                    enough
                  </li>

                  <li>
                    Users preferred when the calendar had a whole 7 days of
                    options rather than just 2
                  </li>

                  <li>
                    Users enjoyed the floating action button after pressing the
                    + in the bottom navigation bar better streamlining the
                    creation flow.
                  </li>
                </ul>
              </div>
            </div>

            <div
              id="outcomes"
              className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200"
            >
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Outcomes & Future Improvements
              </h2>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                WhereNow is still in progress, but so far, the project has
                validated a clear need for spontaneous, flexible travel planning
                that balances structure, personality, and adaptability. Through
                research, wireframing, and early user testing, I&apos;ve built a
                strong foundation for a system that aims to reduce decision
                fatigue and make real-time travel feel intuitive.
              </p>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Early Impact Metrics
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Initial testing and user interviews have shown strong interest
                in WhereNow&apos;s approach where 83% of early users said
                WhereNow felt easier or more exciting than traditional planning
                tools.
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Future Metrics
              </h1>
              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                By the end of the project, I hope to test and validate:
              </p>

              <div className="bg-[#f2f7fc] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#6d7c9c] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    📉 Reduction in planning time (target: 50–500% faster than
                    typical manual planning)
                  </li>
                  <li>
                    ✅ Increased trust in suggestions (users choosing suggested
                    items without major edits)
                  </li>

                  <li>
                    🔁 Frequency of plan adjustments (to measure how users
                    interact with flexibility)
                  </li>

                  <li>
                    👫 Group planning interest & participation (clicks/shares on
                    invite links or votes)
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Current Takeaways
              </h1>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    WhereNow is being designed for travelers who want to make
                    quick, confident decisions without the stress of traditional
                    planning tools. Users don&apos;t want to scroll through
                    endless blogs, juggle multiple apps, or worry about what the
                    weather might ruin last minute. They want something that
                    feels smart, personal, and flexible — without being
                    overwhelming. The early feedback from user testing showed
                    strong support for a travel experience that offers helpful
                    suggestions but still keeps users in control.
                  </li>
                  <li>
                    A core design hypothesis guiding this process is that if we
                    allow users to plan trips using only a few simple,
                    meaningful inputs — like mood, distance, and budget — then
                    they&apos;ll feel more confident and spend less time
                    planning overall. Another key assumption is that if trip
                    suggestions are responsive to real-time conditions like
                    weather or availability, then users will trust the system
                    more and feel like it&apos;s genuinely helping them make
                    better choices. This thinking informed early choices around
                    onboarding, activity filtering, and itinerary layout.
                  </li>

                  <li>
                    So far, the design direction has been validated by how users
                    have responded to clean navigation, flexible itineraries,
                    and an interface that avoids clutter. It&apos;s clear that
                    people appreciate a planning tool that doesn&apos;t overload
                    them with decisions. As development continues, I&apos;ll
                    focus on enhancing group planning features, building out
                    mood-based trip templates, and exploring ways to let users
                    save and revisit ideas with ease — all while keeping the
                    core experience light, adaptive, and intentional.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex justify-between items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <div className="text-[18px] font-semibold text-[#333333]">
                Next: Flexy
              </div>
              <Link href="/flexy">
                <button className="flex justify-center items-start h-[30px] w-[30px]  rounded-full bg-[#f3f3f3] cursor-pointer">
                  <Image
                    src="/right-arrow.png"
                    alt="rightarrow"
                    width={30}
                    height={30}
                    className="scale-75"
                  />
                </button>
              </Link>
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

export default WhereNow;
