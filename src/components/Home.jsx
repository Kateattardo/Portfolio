import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import { ThemeContext } from "../App";
// import { NAVY, YELLOW, WHITE } from "../constants";

const Home = () => {
  // const { theme } = useContext(ThemeContext);
  // const h1Color = theme === "light" ? `text-[${YELLOW}]` : `text-white`;
  // const h2Color = theme === "light" ? NAVY : YELLOW;
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        {/* <h1 className={`text-4xl sm:text-7xl font-bold ${h1Color}`}> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffd700]">
          Kate Attardo
        </h1>
        {/* <h2 className={`text-4xl sm:text-7xl font-bold text-[${h2Color}]`}> */}
        <h2 className="text-4xl sm:text-7xl font-bold text-[#000080]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-pink-600 py-4 max-w[700px]">
          I look forward to connecting with you.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#000080] group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600">
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
