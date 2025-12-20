import Image from "next/image";
import React from "react";
import AudioPlayer from "./global/AudioPlayer";

export default function IlustratedBook() {
  return (
    <div className="relative">
      <div className="blur-bg absolute top-1/5  -translate-x-1/2 -translate-y-1/8 pointer-events-none"></div>
      <section
        id="book-store"
        className="flex-1 flex items-center justify-center px-3 md:px-6 py-5 "
      >
        <div className="max-w-7xl relative p-0 md:p-10 w-full overflow-hidden  shadow-2xl mx-auto md:text-center space-y-8">
          {/* Main Heading */}
          <div className="relative z-0 p-2">
            <Image
              src={"/vector1.png"}
              width={560}
              height={777}
              className="absolute left-0"
              alt="vector1"
            />

            <h1 className=" text-2xl text-[#FFFFFF] md:text-5xl lg:text-7xl font-bold mb-6">
              That's Not All!
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              Extend the magic of learning beyond the app. Our beautifully
              illustrated books bring Harmonious Learning stories to life,
              blending imagination with real-world knowledge in every page.
            </p>

            <p className="text-gray-400 text-base md:text-lg mb-8">
              Adventures your child can hold in their hands!
            </p>

            {/* CTA Button */}
            {/* CTA Button */}
            <div className="relative inline-block">
              <a
                href="https://harmoniouslearning.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="glow-button">Visit Our Store!</button>
              </a>
            </div>
          </div>

          {/* Infinite Auto Loop Slider */}

          <div className="w-full mt-40 z-0   top-0 mb-20 overflow-hidden">
            <h1 className="text-2xl text-[#FFFFFF] md:text-5xl font-bold mb-6">
              A Sneak Peek Into the Journey Ahead
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg  md:text-xl max-w-3xl mx-auto leading-relaxed mb-5">
              Enjoy a sample story from our Harmonious Learning app, where
              calming narration meets meaningful lessons. Each story is designed
              to nurture curiosity, creativity, and peaceful learning moments.
            </p>
            <AudioPlayer />
            <div className="slider-track  mt-4 flex">
              {[
                "/book1.jpg",
                "/book2.jpg",
                "/book3.png",
                "/book4.jpg",
                "/book5.png",
                "/book6.png",
                "/book7.jpg",
                "/book8.jpg",
              ].map((num, i) => (
                <div
                  key={i}
                  className="relative w-64 h-80 mx-4 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
                >
                  <img
                    src={num}
                    alt={`Book ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Image
            src={"/vector2.png"}
            width={273}
            height={130}
            className="absolute top-[30%] right-0"
            alt="vector1"
          />
        </div>
      </section>

      <div className="blur-bg absolute top-1/2 right-0   translate-x-0 -translate-y-1/2 pointer-events-none"></div>
      <div className="blur-bg absolute top-1/2 right-0   translate-x-0 translate-y-4 pointer-events-none"></div>
    </div>
  );
}
