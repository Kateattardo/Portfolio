import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#6495ed]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kate Attardo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a9a9a9]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-black py-4 max-w[700px]">
          Here will be a short about me section.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 ">
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
