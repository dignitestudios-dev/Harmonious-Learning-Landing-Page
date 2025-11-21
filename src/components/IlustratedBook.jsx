import Image from "next/image";
import React from "react";

export default function IlustratedBook() {
  return (
    <section
      id="book-store"
      className="flex-1 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl rounded-[12px] relative p-10 w-full overflow-hidden bg-[#0B0B0B] shadow-2xl relative mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="relative z-40">
          <Image
            src={"/vector1.png"}
            width={560}
            height={777}
            className="absolute left-0"
            alt="vector1"
          />

          <h1 className="text-5xl text-[#FFFFFF] md:text-6xl lg:text-7xl font-bold mb-6">
            That's Not All!
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            Extend the magic of learning beyond the app. Our beautifully
            illustrated books bring Harmonious Learning stories to life,
            blending imagination with real-world knowledge in every page.
          </p>

          <p className="text-gray-400 text-base md:text-lg mb-8">
            adventure your child can hold in their hands.
          </p>

          {/* CTA Button */}
          <div className="relative inline-block">
            <button className="glow-button">Try It Out</button>
          </div>
        </div>
        {/* Infinite Auto Loop Slider */}
        <div className="w-full mt-10 z-0  h-96 top-0  overflow-hidden">
          <div className="slider-track flex">
            {["/book1.jpeg","/book2.jpeg","/book3.jpeg","/book4.jpeg","/book5.jpeg"].map((num, i) => (
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
  );
}
