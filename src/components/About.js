import React from "react";
import profileVideo from "../assets/profileVideo.mp4";
import { generalInfo } from "../information";
import { IconContext } from "react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
// import nightSky from "../assets/nightSky.jpg";

const About = ({ pageWidth, pageYPosition, navbarSpace, urlServer }) => {
  return (
    <>
      <div
        className="flex justify-center items-center m-0 p-0 pt-32 pb-8 aboutPageGeneral"
        id="aboutPage"
        style={{
          // backgroundImage: `url(${nightSky})`,
          minHeight: "100vh",
        }}
      >
        <div className="flex m-0 p-0 justify-around flex-wrap align-items-center">
          <div className="hidden md:w-1/2 md:flex md:items-center p-4">
            <div>
              <h2 className="text-red-600 text-3xl">Görkem Buğra Saraç</h2>
              <h4 className="text-gray-100 text-lg font-mono">
                Full-Stack Web Deweloper
              </h4>
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
              <div className="flex flex-wrap justify-center text-white my-16">
                <button className="bg-red-700 hover:bg-red-600 text-white  px-4 py-2 text-xl rounded-xl">
                  Contact Me
                </button>
                <div className="font-mono mt-2 mx-4">
                  CV:
                  <a
                    href={urlServer + "/downloads/personal-cv"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 ml-2"
                  >
                    Download
                  </a>{" "}
                  or{" "}
                  <a
                    href={urlServer + "/downloads/open-personal-cv"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    Open on Browser
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:w-1/3 flex justify-center items-start"
            style={{
              transform:
                pageWidth >= 768
                  ? `translate(0px, ${pageYPosition / 1.8}px)`
                  : "",
              transition: "all ease 1s",
            }}
          >
            <video
              id="video"
              autoPlay
              className="w-1/2 rounded-full"
              loop
              muted
              playsInline
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
              <div className="flex flex-wrap justify-center items-center my-16">
                <div className="px-4 py-2 font-mono text-white">
                  <button className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 text-xl rounded-xl">
                    Hire Me
                  </button>
                </div>
                <div className="flex flex-wrap justify-center items-center ">
                  <div className=" px-2 py-2 font-mono text-white">
                    CV:
                    <a
                      href={urlServer + "/downloads/personal-cv"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 ml-2"
                    >
                      Download
                    </a>{" "}
                    or{" "}
                    <a
                      href={urlServer + "/downloads/open-personal-cv"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      Open on Browser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-100 mx-8">
        #React.js #React-Native #Node.js #Express.js #MongoDB #Bootstrap
        #Tailwind #JWT-Authentication #Axios #Joi
      </p>
      <div style={{ height: "30px" }}></div>
    </>
  );
};

export default About;
