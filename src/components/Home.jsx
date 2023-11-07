import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import ThemeToggleButton from "./ThemeToggleButton";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#6495ed]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kate Attardo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-black py-4 max-w[700px]">
          I Look forward to connecting with you.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
