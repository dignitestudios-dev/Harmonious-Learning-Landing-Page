import React from "react";
import Logo from "./assets/logo.png"; // Replace with your actual logo path


function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center text-white px-4">
      <div className="h-[600px] w-full bg-[#0C1324] flex flex-col justify-center items-center text-white px-4 rounded-2xl">
        <img
          src={Logo} // Replace with your actual logo path
          alt="Logo"
          className=" mb-8"
        />

        <h1 className="text-5xl font-bold text-green-400 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 text-center">
          Just 60 days remaining until the big reveal of our new product!
        </p>

        <p className="mt-16 text-sm text-gray-400 text-center">
          Get in touch with us: <a href="mailto:support@harmonius.com" className="underline hover:text-white">support@harmonius.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
