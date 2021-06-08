import React from "react";
import animals from "../assets/animals.png";
import market from "../assets/market.png";
import videos from "../assets/videos.png";
import welcome from "../assets/welcome.png";
import {
  tamzirtapozParagraph1,
  tamzirtapozContent,
  tamzirtapozParagraph2,
} from "../information";

const Projects = ({ pageWidth, pageYPosition, navbarSpace }) => {
  return (
    <div
      id="projectsPage"
      className="container-fluid m-0 p-0 projectsPageGeneral"
      style={{ minHeight: "350px" }}
    >
      <h1
        className="text-center shadow"
        style={{
          background:
            pageYPosition >
            document.getElementById("projectsPage")?.offsetTop - navbarSpace
              ? "rgb(255, 168, 168)"
              : "rgba(255,255,255,0.2)",
          position: "sticky",
          top: navbarSpace,
        }}
      >
        My Projects and Educational Information
      </h1>
      <div
        className="d-flex m-4 p-2 justify-content-center flex-wrap align-items-center"
        style={{ background: "rgba(0,0,0,0.0)" }}
      >
        <div className="d-flex m-0 p-0 justify-content-center flex-wrap align-items-center">
          <div
            className="container-fluid m-0 p-4"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "3px",
              borderStyle: "hidden",
              borderColor: "rgba(0,0,0,0)",
              borderRadius: "50px",
            }}
          >
            <h4
              className="text-center"
              style={{ textShadow: "10px 10px 5px rgba(0, 0, 0, 0.2)" }}
            >
              Project Tamzirtapoz
            </h4>
            <a
              href="https://tamzirtapoz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the tamzirtapoz page while working
            </a>
            <p className="text-dark">{tamzirtapozParagraph1}</p>
            <div className="d-flex m-0 p-0 justify-content-around flex-wrap">
              <div className="container-fluid m-0 p-0">
                <ol>
                  {tamzirtapozContent.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
              <div className="d-flex justify-content-around m-1 p-1 flex-wrap">
                {pageWidth > 726 ? (
                  <>
                    {" "}
                    <div className="d-flex m-0 p-1">
                      <img
                        className="img-fluid"
                        src={welcome}
                        alt="welcome"
                        style={{ maxHeight: "200px" }}
                      />
                    </div>
                    <div className="d-flex m-0 p-1">
                      <img
                        className="img-fluid"
                        src={market}
                        alt="market"
                        style={{ height: "200px" }}
                      />
                    </div>
                    <div className="d-flex m-0 p-1">
                      <img
                        className="img-fluid"
                        src={videos}
                        alt="videos"
                        style={{ height: "200px" }}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <div className="d-flex m-0 p-1">
                  <img
                    className="img-fluid"
                    src={animals}
                    alt="animals"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
            <p>{tamzirtapozParagraph2}</p>
            <a
              href="https://github.com/tamzirtapoz/tamzirtapoz-Main-Frontend-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code on GitHub
            </a>
          </div>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default Projects;
