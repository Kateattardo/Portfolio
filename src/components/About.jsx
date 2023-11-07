import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#6495ed] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi, I'm Kate. Please take a look at my work and let's connect.{" "}
              </p>
            </div>
            <div>
              <p>
                As a Full Stack Engineer, I thrive on building seamless and
                impactful digital solutions from the ground up. With expertise
                in both front-end and back-end development, I love transforming
                ideas into functional, user-friendly applications. With elegant
                user interfaces, and optimizing server performance in mind. I'm
                always excited to enhance my skills and take on challenges to
                keep growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
