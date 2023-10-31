import React from "react";
import Kitchwitch from "../assets/projects/kitchwitch.jpg";
import Parklopedia from "../assets/projects/Parklopedia.jpg";
import TaskMaster from "../assets/projects/TaskMaster.jpg";

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
        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* gird item */}
          <div
            style={{ backgroundImage: `url(${Kitchwitch})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-pink-600 tracking-wider ">
                React Js Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/https://kitchwitch-a98d3.web.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Parklopedia})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-pink-600 tracking-wider ">
                Express Js Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/https://parklopedia.fly.dev/parks">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/https://github.com/Kateattardo/Parklopedia.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TaskMaster})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-pink-600 tracking-wider ">
                Python & Django Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/https://task-master-1u4f.onrender.com/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/https://github.com/WahidSiddiqi/task_master.git">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
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
