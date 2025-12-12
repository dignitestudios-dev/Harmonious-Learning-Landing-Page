import Image from "next/image";
import React from "react";

export default function StoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative lg:px-8">
      <div className="blur-bg absolute top-1/2  -translate-x-1/3 translate-y-20 pointer-events-none"></div>      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-white mb-6">
              Comparing Our Stories With Other’s
            </h2>

            <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed">
              Our stories are thoughtfully designed to nurture curiosity,
              creativity, and learning far beyond ordinary tales.
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              <div>
                <div className="text-[40px] sm:text-[45px] font-bold text-orange-400 mb-2">
                  200%
                </div>
                <p className="text-gray-300 text-[15px] sm:text-[16px]">
                  More Meditation Engagement
                </p>
              </div>

              <div>
                <div className="text-[40px] sm:text-[45px] font-bold text-orange-400 mb-2">
                  150%
                </div>
                <p className="text-gray-300 text-[15px] sm:text-[16px]">
                  Better Retention Rates
                </p>
              </div>

              <div>
                <div className="text-[40px] sm:text-[45px] font-bold text-orange-400 mb-2">
                  180%
                </div>
                <p className="text-gray-300 text-[15px] sm:text-[16px]">
                  Higher User Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/actres-2.png"
              width={400}
              height={400}
              alt="actress"
              className="h-[400px] w-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
       <div className="blur-bg absolute top-2/2 right-0   translate-x-0 translate-y-10 pointer-events-none"></div>
    </section>
  );
}
