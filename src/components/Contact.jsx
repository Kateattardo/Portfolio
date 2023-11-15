import React from "react";
// import { NAVY } from "../constants";
// import { ThemeContext } from "../App";

const Contact = () => {
  // const { theme } = useContext(ThemeContext);
  // const containerBackground = theme === "light" ? `#ffefd5` : NAVY;
  // const containerClassName = `contact-container bg-[${containerBackground}]`;
  return (
    // <div className={containerClassName}>
    <div className="contact-container bg-[#ffefd5]">
      <div
        name="contact"
        className="w-full h-screen flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/3d4b3636-e550-415f-9eed-81309261000c"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#000080]">
              Contact
            </p>
            <p className="text-[#000080] py-4">
              Submit the form below or email me - kateattardo@gmail.com
            </p>
          </div>
          <input
            className="bg-white p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-white"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-white p-2"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className=" text-[#000080] border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
