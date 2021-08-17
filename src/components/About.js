import React from "react";
import profileVideo from "../assets/profileVideo.mp4";
import { generalInfo } from "../information";
import { IconContext } from "react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import nightSky from "../assets/nightSky.jpg";

const About = ({ pageWidth, pageYPosition, navbarSpace, urlServer }) => {
  return (
    <div
      className="flex justify-center items-center m-0 p-0 pt-32 pb-8 aboutPageGeneral"
      id="aboutPage"
      style={{
        backgroundImage: `url(${nightSky})`,
        minHeight: "100vh",
      }}
    >
      <div className="flex m-0 p-0 justify-around flex-wrap align-items-center">
        <div className="hidden md:w-1/2 md:flex md:items-center p-4">
          <div>
            <p className="text-gray-100 text-justify bg-gray-900 bg-opacity-40">
              <IconContext.Provider
                value={{
                  color: "rgba(50, 50, 255, 1)",
                  className: "global-class-name inline",
                  size: "20px",
                }}
              >
                <ImQuotesLeft />
              </IconContext.Provider>{" "}
              {generalInfo}{" "}
              <IconContext.Provider
                value={{
                  color: "rgba(50, 50, 255, 1)",
                  className: "global-class-name inline",
                  size: "20px",
                }}
              >
                <ImQuotesRight />
              </IconContext.Provider>
            </p>
            <div className="flex justify-center">
              <button className="bg-red-700 hover:bg-red-600 text-white my-16 px-4 py-2 text-xl rounded-xl">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center items-start">
          <video
            id="video"
            autoPlay
            className="w-1/2 rounded-full"
            loop
            muted
            playsinline
            style={{
              border: "2px",
              borderStyle: "solid",
              // borderColor: "#ef4444",
              borderColor: "rgba(0,0,0,0)",
            }}
          >
            <source id="mp4" src={profileVideo} type="video/mp4" />
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </div>
        <div className="md:hidden md:w-1/2 md:flex md:items-center p-4">
          <div>
            <p className="text-gray-100 text-justify bg-gray-900 bg-opacity-40">
              {generalInfo}
            </p>
            <div className="flex justify-center">
              <button className="bg-red-700 hover:bg-red-600 text-white mt-16 px-4 py-2 text-xl rounded-xl">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default About;
