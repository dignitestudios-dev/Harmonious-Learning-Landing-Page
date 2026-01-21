import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
export default function SpecialSection() {
  return (
    <section className="py-0 relative sm:px-6 lg:px-8">
      <div
        className="
      max-w-7xl 
      relative 
      mx-auto 
      xl:bg-[url('/background.png')] 
      bg-contain 
      bg-center 
      bg-no-repeat 
      pb-5
      md:py-20
      lg:h-[1550px] 
      h-auto
      
    "
      >
        {/* Heading */}
        <div className="py-2 md:mt-30 lg:w-[655px] mb-2 w-full px-4 sm:px-4">
          <h2
            className="
          font-bold 
          text-white 
          mb-6 sm:mb-8 leading-tight
          text-2xl sm:text-3xl md:text-4xl lg:text-[40px]
        "
          >
            What Makes Harmonious Learning Special?
          </h2>

          <p
            className="
          text-[#FFFFFF] 
          text-sm sm:text-base md:text-lg lg:text-[18px]
          font-normal 
          mt-3
        "
          >
            Every feature is thoughtfully created to turn everyday moments into
            opportunities for discovery, imagination, and meaningful learning.
          </p>
        </div>

        {/* Center Image - Hide on Mobile */}
        <div className="relative flex justify-center">
          <Image
            src="/special-img.png"
            className="absolute  lg:h-[750px] top-2 left-40 hidden xl:block"
            width={750}
            height={0}
            alt=""
          />
        </div>

        {/* Cards Section */}
        <div
          className="
        flex lg:flex-row flex-col 
        justify-between xl:px-5
         bg-[url(/hero-right.png)] bg-cover bg-no-repeat bg-center
      "
        >
          {/* Left Column */}
          <div className="w-full pb-5 md:pb-10 lg:pb-3 px-4 sm:px-2  flex flex-col lg:gap-20 bg-linear-to-b from-black/30 to-black/80">
            <div className="block lg:hidden mt-3 md:mt-10 lg:w-[386px] w-full lg:ml-auto">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  001
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                Recommended For You
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                Personalized learning suggestions based on your child’s habits.
              </p>
            </div>
            {/* Card 002 */}
            <div className="lg:w-[386px] mt-7 md:mt-10 w-full">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  002
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                UPCOMING SECTION
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                A look ahead at new learning adventures. Explore upcoming
                educational stories, complete with cover art and summaries.
              </p>
            </div>

            {/* Card 003 */}
            <div className="hidden lg:block  lg:w-[386px] w-full mt-5 lg:mt-72 ">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  003
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                Bedtime Stories
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                Each audiobook turns academic ideas into magical bedtime tales
                that spark curiosity.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full px-4 sm:px-2 lg:px-0 bg-black/80">
            {/* Card 001 */}
            <div className="hidden lg:block lg:w-[386px] w-full lg:ml-auto">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  001
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                Recommended For You
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                Personalized learning suggestions based on your child’s habits.
              </p>
            </div>
            <div className="block lg:hidden  lg:w-[386px] w-full mt-3 lg:mt-72 ">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  003
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                Bedtime Stories
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                Each audiobook turns academic ideas into magical bedtime tales
                that spark curiosity.
              </p>
            </div>
            {/* Card 004 */}
            <div className="lg:w-[386px] w-full lg:ml-auto lg:mt-[400px] mt-7 md:mt-10">
              <div
                className="
              inline-flex items-center justify-center 
              border border-orange-400 rounded-full 
              px-4 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-6
            "
              >
                <span className="text-xl sm:text-2xl font-semibold text-orange-400">
                  004
                </span>
              </div>

              <h2
                className="
              text-lg sm:text-xl md:text-2xl 
              text-[#FFFFFF] font-bold mb-2 sm:mb-2
            "
              >
                Meditation Tracks
              </h2>

              <p
                className="
              text-sm sm:text-base md:text-[15px]
              font-normal leading-relaxed text-gray-300
            "
              >
                Mindful learning through calm reflection. These soothing
                sessions teach kids focus, patience, and emotional awareness
                while helping them relax, recharge, and strengthen their
                readiness to learn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blur-bg absolute bottom-1  -translate-x-1/3 translate-y-20 pointer-events-none"></div>
    </section>
  );
}
