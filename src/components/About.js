import React, { useState } from "react";
import profile from "../assets/profile.png";
import { generalInfo } from "../information";
import { IconContext } from "react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const About = ({ pageWidth, pageYPosition, navbarSpace, urlServer }) => {
  const [toggleShowMore, setToggleShowMore] = useState(false);
  const toggleShowMoreFunc = (e) => {
    e.preventDefault();
    setToggleShowMore(!toggleShowMore);
  };
  return (
    <div
      className="container-fluid m-0 p-0 aboutPageGeneral"
      id="aboutPage"
      style={{ minHeight: "350px" }}
    >
      <h1
        className="text-center shadow"
        style={{
          background:
            pageYPosition > 0 ? "rgb(206, 135, 42)" : "rgba(255,255,255,0.2)",
          position: "sticky",
          top: navbarSpace,
        }}
      >
        Görkem Buğra Saraç
      </h1>
      <div className="d-flex m-0 p-0 justify-content-around flex-wrap align-items-center">
        <img src={profile} alt="Profile" className="profilePicture m-1 p-1" />
        <div
          className={`d-flex ${
            pageWidth < 450 ? "m-0 p-4" : "m-4 p-4"
          } justify-content-center cornerBorder`}
        >
          <p>
            <IconContext.Provider
              value={{
                color: "rgba(50, 50, 255, 1)",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <ImQuotesLeft />
            </IconContext.Provider>{" "}
            {pageWidth < 750 ? (
              <>
                {toggleShowMore ? generalInfo : generalInfo.substring(0, 344)}

                <span>
                  <button
                    className="linkWithoutBlueLine text-white"
                    style={{
                      border: "0px",
                      borderStyle: "hidden",
                      background: "transparent",
                    }}
                    onClick={(e) => {
                      toggleShowMoreFunc(e);
                    }}
                  >
                    {!toggleShowMore ? "...Show More" : "...Show Less"}
                  </button>
                </span>
              </>
            ) : (
              generalInfo
            )}{" "}
            <IconContext.Provider
              value={{
                color: "rgba(50, 50, 255, 1)",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <ImQuotesRight />
            </IconContext.Provider>
          </p>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
      <div className="continer" style={{ background: "rgba(255,255,255,0.4)" }}>
        <h4 className="text-center">Personal CV</h4>
        <div className="d-flex justify-content-center flex-wrap">
          <p>
            <a
              href={urlServer + "/downloads/personal-cv"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>{" "}
            or{" "}
            <a
              href={urlServer + "/downloads/open-personal-cv"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on Browser
            </a>
          </p>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default About;
