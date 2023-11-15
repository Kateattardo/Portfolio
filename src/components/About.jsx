import React from "react";
// import { ThemeContext } from "../App";
// import { YELLOW, WHITE } from "../constants";

const About = () => {
  // const { theme } = useContext(ThemeContext);
  // const  = theme === "light" ? `text-[${YELLOW}]` : `text-white`;
  return (
    <div name="about" className="w-full h-screen text-[#000080]">
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
                ideas into functional, user-friendly applications. Keeping
                elegant user interfaces and optimizing server performance in
                mind, I'm always excited to enhance my skills and take on
                challenges to keep growing.
              </p>

              <p>
                My previous background is in the arts, mental health counseling,
                and small business ownership. This diverse experience has honed
                my creative problem-solving skills. I understand the importance
                of aesthetics, accessibility, and client-focused approach which
                enables me to contribute a rich, multidimensional perspective to
                any project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
