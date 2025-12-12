import React from "react";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="lg:pt-20 pt-10 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-full mx-auto w-full">
        {/* Grid responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE FIRST ON MOBILE */}
          <div className="flex justify-end order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/hero-right.png"
                width={600}
                height={500}
                className="w-full relative lg:-right-[32px] lg:-top-20 top-10 -right-[19px] max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] object-contain"
                alt="Hero Image"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="order-2 lg:order-1">
            <h1
              className="
          text-white font-bold leading-tight mb-6
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px]
        "
            >
              Building Brighter Minds, One Story at a Time
            </h1>

            <p
              className="
          text-gray-300 leading-relaxed mb-8
          text-lg sm:text-xl md:text-2xl lg:text-[26px]
        "
            >
              From math mysteries to science wonders, Harmonious Learning blends
              storytelling and serenity to spark your child’s imagination, where
              curiosity meets calm and dreams build the future.
            </p>
            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.dignitestudios.harmoniousLearning"
                }
              >
                <Image src={"/app-store.png"} width={200} height={200} />
              </Link>
              <Link
                href={
                  "https://apps.apple.com/us/app/harmonious-learning/id6744360499"
                }
                target="_blank"
              >
                <Image src={"/play-store.png"} width={200} height={200} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
