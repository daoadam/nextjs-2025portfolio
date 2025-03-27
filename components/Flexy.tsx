"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

const SLIDES = [
  "/flexy1.jpg",
  "/flexy2.png",
  "/flexy3.jpg",
  "/flexy4.jpg",
  "/flexy5.jpg",
];

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
                        WhereNow?
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
                    <p>Flexy Mobile App</p>
                  </div>

                  <div className="flex flex-col text-[15px] font-medium text-[#8a8a8a] gap-[10px] pt-[10px]">
                  <p>Defining the problem & MVP</p>
                   
                    
                    <p>Research & Insight</p>

                    <p>Testing & User feedback</p>
                    <p>Implementation & Features</p>
                    <p>Outcomes</p>
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
            <div className=" bg-[#c276dd] flex flex-col items-start p-[20px] w-full rounded-[20px] shadow-amber-600 shadow-md hover:shadow-[hsla(220,100%,61%,1)] hover:shadow-lg transition-transform duration-200 ">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h1 className="font-bold text-[#1a0f0f] text-[22px]  xl:pt-[0px]">
                Flexy Mobile App
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I researched, designed and optimized key touchpoints in Flexy’s
                onboarding flow. I conducted rapid iteration cycles, refining
                the experience to make sign-ups smoother and engagement
                stronger. I worked closely with research and built wireframes
                and mock-ups based off information.
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
                    Aug - Nov 2024
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

              <div className="flex bg-black h-[1px] w-fill my-[20px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Context
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Flexy is a conceptual beauty treatment booking platform designed
                to streamline appointment scheduling for salons and clients.{" "}
                <br /> <br />
                Through research and iterative design, I led efforts to improve
                the user experience, focusing on reducing booking friction,
                enhancing provider-client communication, and increasing
                appointment completion rates.
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                My Role
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I was the lead designer and researcher on the team. My team also
                had two business majors.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Defining the problem & MVP
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Problem Statement
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Booking salon appointments is frustrating, especially during
                peak hours or when choosing a specific technician. <br />
                <br /> Many booking systems lack real-time availability and send
                unclear or missed notifications, leading to confusion and wasted
                time.
                <br /> <br /> Users need a smoother booking process, better
                communication, and real-time updates to improve their
                experience.
              </p>

              <div className="flex p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  &quot;Booking an appointment shouldn’t feel like a part-time
                  job. I hate calling salons just to be told they’re fully
                  booked&quot; <br />- Customer
                </p>
              </div>

              <div className="flex p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  &quot;It’s frustrating when clients don’t show up, especially
                  when I could’ve given that spot to someone else&quot; <br />-
                  Barber
                </p>
              </div>

              <div className="flex bg-black h-[1px] w-fill my-[20px]"></div>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Competitor Analysis
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                I studied competitor platforms and their limitations. Many
                existing tools focused on either appointment booking or
                reminders but rarely provided both in a seamless way. Some
                solutions were overly complicated, making them unappealing for
                smaller salons that needed simple yet effective tools. This led
                to a lot of businesses booking solely on phone numbers.
              </p>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Key features for the MVP
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Researching our target users and competitors highlighted a gap
                in the market for booking booking treatments. This analysis
                enabled us to construct a blueprint of the Flexy app focused on
                providing a centralised location for beauty services and
                convenient booking.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Mobile Interface: Most users prefer booking via mobile.
                  </li>
                  <li>
                    Calendar with notifications: Many clients miss appointments
                    due to lack of reminders.
                  </li>
                  <li>
                    Pre-pay system: Owners struggle with last-minute
                    cancellations, impacting revenue.
                  </li>
                  <li>
                    Time-slots and messaging: Clients often rely on Instagram
                    DMs or texts instead of official booking apps especially for
                    more specialised services.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                User Research & Insights
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Discovery
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                To uncover common pain points during booking a beauty treatment
                service, I conducted 20 user interviews with classmates,
                alongside a survey receiving 50 responses.
              </p>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                The key insights were
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Most people don&apos;t cancel appointments because it is not
                    simple enough and 30% of users will just skip their
                    appointment without notice
                  </li>
                  <li>
                    90% of users rely on multiple apps (Google Calendar, email,
                    and messaging platforms) to keep track of appointments
                    manually.
                  </li>
                  <li>
                    Clarity with business to customer is important with 70% of
                    people for clear communications
                  </li>
                  <li>
                    Users often face challenges in finding open slots,
                    especially during peak hours and when preferring specific
                    technicians.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Significance
              </h1>

              <div className="flex flex-row flex-wrap w-full justify-center gap-[10px]">
                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    No-shows (30%) happen because canceling is too hard → <br />
                    <br />
                    Add one-tap cancellation and automated reminders.
                  </p>
                </div>

                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    90% manually track bookings → <br />
                    <br />
                    Integrate Google/Apple Calendar sync and push notifications.
                  </p>
                </div>
                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    70% need clearer communication → <br /> <br />
                    Implement real-time confirmations and automated updates.
                  </p>
                </div>

                <div className="flex xl:w-[33%] p-[20px] text-[15px] font-normal justify-center items-center  bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                  <p className="italic text-[#eeeeee]">
                    Finding slots is frustrating → <br /> <br /> Show real-time
                    availability and offer a waitlist feature.
                  </p>
                </div>
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/affinityflexy.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[75%]"
                />
              </div>

              <div className=" h-fit w-fill flex justify-center items-center">
                <Image
                  src="/featurematrixflexy.jpg"
                  alt=""
                  height={2000}
                  width={2000}
                  className="w-[90%]"
                />
              </div>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Testing & User feedback
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                User Feedback
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                To validate the effectiveness of our solutions, we launched an
                A/B test comparing Flexy’s new interface with the existing
                scheduling workflows used by providers.
              </p>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    Providers valued automated reminders, but some preferred
                    manual control over notifications.
                  </li>
                  <li>
                    Clients wanted more flexibility, leading to the enhancement
                    of self-service rescheduling.
                  </li>
                  <li>
                    Financial tracking was helpful, but users requested
                    additional granularity in reporting.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Improvements Based on Feedback
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Enabled manual adjustments for appointment reminders.
                Streamlined the rescheduling process to improve usability.
                Expanded financial tracking for clearer business insights.
              </p>

              <Image
                src="/arrow.png"
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Implementation & Features
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Key Design Choices
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Flexy’s final design balanced automation with provider control,
                ensuring a flexible yet structured approach to scheduling.
              </p>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Problem Statement
              </h1>

              <div className="bg-[#fcf9f2] rounded-[16px]  relative w-full h-fit flex flex-col justify-items-center gap-[10px] p-[20px] ">
                <ul className="font-medium text-[#9c8f6d] text-[15px] flex flex-col gap-[10px] px-[20px] tracking-[-0.2px] leading-[1.2] list-decimal items-start">
                  <li>
                    AI-Powered Smart Scheduling: Suggests optimal appointment
                    slots based on provider trends.
                  </li>
                  <li>
                    Automated Notifications: Ensures timely reminders for both
                    providers and clients.
                  </li>
                  <li>
                    Integrated Calendar Sync: Real-time updates across different
                    scheduling tools.
                  </li>
                  <li>
                    Financial Management Dashboard: Provides earnings
                    projections and payout tracking.
                  </li>
                  <li>
                    Cross-Device Accessibility: Optimized for mobile and web
                    use.
                  </li>
                </ul>
              </div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
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

              <div className="flex flex-col p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  No-shows (30%) happen because canceling is too hard → Add
                  one-tap cancellation and automated reminders.
                </p>
              </div>

              <div className="flex p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  90% manually track bookings → Integrate Google/Apple Calendar
                  sync and push notifications.
                </p>
              </div>
              <div className="flex p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  70% need clearer communication → Implement real-time
                  confirmations and automated updates.
                </p>
              </div>

              <div className="flex p-[20px] text-[15px] font-normal justify-center items-center w-full bg-black tracking-[-0.2px] leading-[1.2] rounded-[8px]">
                <p className="italic text-[#eeeeee]">
                  Finding slots is frustrating → Show real-time availability and
                  offer a waitlist feature.
                </p>
              </div>

              <Image
                src="/arrow.png"
                alt=""
                height={100}
                width={500}
                className="w-full h-auto rounded-[20px] "
              />
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex flex-col justify-items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <h2 className="font-semibold text-[#888888] text-[13px]  xl:pt-[0px]">
                Outcomes & Future Improvements
              </h2>

              <h1 className="font-bold text-[#000000] text-[20px]  xl:pt-[0px]">
                Impact Metrics
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                Flexy’s launch resulted in substantial improvements in provider
                efficiency and engagement. 8% increase in completed
                appointments. 5% reduction in no-shows. 7% increase in provider
                revenue within the first month.
              </p>

              <div className="flex bg-amber-500 h-[1px] w-fill my-[40px]"></div>

              <h1 className="font-bold text-[#1a0f0f] text-[18px]  xl:pt-[0px]">
                Final Takeaways
              </h1>

              <p className="font-medium text-[#312121] text-[15px] flex flex-col gap-[10px] tracking-[-0.2px] leading-[1.2]">
                User-Centric Design Drives Adoption Service providers value
                customization and flexibility in scheduling tools. A balance
                between automation and manual control was essential for success.
                Iterative Testing is Critical User feedback cycles led to key
                refinements in rescheduling, financial insights, and
                notification management, making the platform more user-friendly.
                Product Evolution is Continuous Continuous feedback and
                iteration are necessary to ensure long-term engagement and adapt
                to evolving user needs.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-[16px]  relative w-fill h-fit flex justify-between items-center gap-[10px] p-[20px] shadow-[hsla(220,100%,61%,1)] shadow-md hover:shadow-amber-600 hover:shadow-lg transition-transform duration-200">
              <div className="text-[18px] font-semibold text-[#333333]">
                Next: Project 2
              </div>
              <button className="flex justify-center items-start h-[30px] w-[30px]  rounded-full bg-[#f3f3f3]">
                <Image
                  src="/right-arrow.png"
                  alt="rightarrow"
                  width={30}
                  height={30}
                  className="scale-75"
                />
              </button>
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
