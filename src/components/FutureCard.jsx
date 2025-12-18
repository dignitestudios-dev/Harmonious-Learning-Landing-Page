import React from "react";
import { BookOpen, Heart, Users } from "lucide-react";
import Image from "next/image";
export default function FutureCard() {
  return (
    <section
      id="feature"
      className=" py-12 px-4  sm:px-6 w-full relative lg:px-8"
    >
      <div className="blur-bg absolute top-1/2  -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className=" max-w-7xl   mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" text-center">
            <div className="w-[60px] mx-auto h-[60px] mb-4">
              <Image src={"/book.png"} alt="book.png" width={60} height={60} />
            </div>
            <h3 className="text-[18px] text-center font-bold text-white mb-3">
              LEARN BY SUBJECT
            </h3>
            <p className="text-gray-300 font-medium text-[15px]">
              Every book neatly organized by themes like science, art, nature &
              more ; making it easy to find the perfect read for curious little
              minds.
            </p>
          </div>
          <div className="text-center">
            <div className="w-[60px] mx-auto h-[60px] mb-4">
              <Image
                src={"/brain.png"}
                alt="brain.png"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-xl text-center font-bold text-white mb-3">
              BUILD EARLY SKILLS
            </h3>
            <p className="text-gray-300">
              Stories that spark creativity, confidence, and curiosity ; one
              page at a time.
            </p>
          </div>
          <div className="text-center">
            <div className="w-[60px] mx-auto h-[60px] mb-4">
              <Image src={"/idea.png"} alt="idea.png" width={60} height={60} />
            </div>
            <h3 className="text-xl text-center font-bold text-white mb-3">
              FUN & ENGAGING
            </h3>
            <p className="text-gray-300">
              Bright illustrations, interactive stories, and age-friendly reads
              that keep kids learning while having fun.
            </p>
          </div>
        </div>
      </div>
      <div className="blur-bg absolute top-2/2 right-0   translate-x-0 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
