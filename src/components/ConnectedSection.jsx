import Image from "next/image";
import React from "react";

export default function ConnectedSection() {
  return (
    <section
    id="contact-us"
      className="w-full min-h-screen text-white px-4 md:px-10 py-10 md:py-20"
      style={{
        background: "linear-gradient(99.66deg, #000086 0.87%, #CEA3D8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            LET’S STAY <br /> CONNECTED!
          </h1>

          {/* Illustration Placeholder */}
          <div className="md:w-[420px] h-[180px] sm:h-[200px] md:h-[220px]  rounded-full relative">
             <Image alt="contac-us.png" src={"/contac-us.png"} width={400} height={100} />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-[#E5D9EB] max-w-xl">
          <h3 className="font-bold text-lg leading-snug mb-4">
            HAVE A QUESTION, IDEA, OR A LITTLE STAR WHO LOVES OUR STORIES? WE’D
            LOVE TO HEAR FROM YOU!
          </h3>

          <p className="text-sm mb-10 leading-relaxed">
            Send us a message below and our friendly team will get back to you
            soon ; we’re always happy to chat about learning, storytelling, and
            bedtime magic.
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/20 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/20 focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 backdrop-blur-sm border border-white/20 focus:outline-none"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-[#0A003A] text-white font-semibold
              shadow-[0px_10px_30px_rgba(255,165,0,0.5)] border border-[#FBBE6E]/60 
              hover:scale-105 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
