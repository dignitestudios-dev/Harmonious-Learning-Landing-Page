import React from "react";
import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 px-4 relative sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* MOBILE FIRST — IMAGE FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* IMAGE — order first on mobile */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-none">
            <Image
              src="/family-study-pic.webp"
         width={400}
              height={400}
              alt="Why Us"
              className="h-[400px] w-full object-cover shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="lg:col-span-8 order-2 lg:order-none">
            <h2
              className="font-bold text-white mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[40px]
            "
            >
              Why Us?
            </h2>

            <p
              className="
              text-gray-300 leading-relaxed mb-8
              text-base sm:text-lg md:text-xl lg:text-[18px]
            "
            >
              We turn bedtime into an opportunity for growth. Studies show that
              children absorb knowledge best when calm and emotionally
              connected, making bedtime the perfect moment to introduce new
              ideas. Our academic bedtime stories weave math, science, and art
              into imaginative tales that spark curiosity, build focus, and
              strengthen memory — helping kids rest, dream, and learn all at
              once.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3 items-center">
                <Image src="/fill-star.png" width={18} height={18} alt="" />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Based on neuroscience and child development research
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Image src="/star.png" width={18} height={18} alt="" />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Stories told before sleep boost long-term memory
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Image src="/dots.png" width={18} height={18} alt="" />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Academic subjects presented through creative storytelling
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Image src="/dots.png" width={18} height={18} alt="" />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Encourages curiosity, critical thinking, and emotional
                  connection
                </span>
              </li>
            </ul>

            {/* Button linking to App Store / Play Store */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="glow-button mt-6">Try It Out!</button>
            </a>
          </div>
        </div>
      </div>
      <div className="blur-bg absolute top-2/2 right-0   translate-x-0 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
