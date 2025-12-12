import AboutUsSection from "@/components/AboutUsSection";
import ConnectedSection from "@/components/ConnectedSection";
import FutureCard from "@/components/FutureCard";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Hero from "@/components/Hero";
import IlustratedBook from "@/components/IlustratedBook";
import SpecialSection from "@/components/SpecialSection";
import StoriesSection from "@/components/StoriesSection";
import WhyUsSection from "@/components/WhyUsSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <div className="bg-gradient-to-br from-[#03002A] via-[#271056] to-[#83227E]">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-[#020002] w-full">
          <FutureCard />
          <WhyUsSection />
          <StoriesSection />
          <SpecialSection />
          <IlustratedBook />
          <AboutUsSection />

          <ConnectedSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
