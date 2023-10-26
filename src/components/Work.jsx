import React from "react";
import Kitchwitch from "../assets/kitchwitch.jpg";
import Parklopedia from "../assets/Parklopedia.jpg";
import TaskMaster from "../assets/TaskMaster.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#6495ed]">
      <div className="mx-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Enjoy some of my recent projects/work..?</p>
        </div>

        <div
          style={{ backgroundImage: `url(${Kitchwitch})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div ">
            {/* hover */}
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
