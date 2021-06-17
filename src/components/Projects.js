import React, { useState } from "react";
import animals from "../assets/animals.png";
import messaging1 from "../assets/messaging1.jpg";
import videos from "../assets/videos.png";
import welcome from "../assets/welcome.png";
import { GoMarkGithub } from "react-icons/go";
import { Modal, Button } from "react-bootstrap";
import {
  tamzirtapozParagraph1,
  tamzirtapozContent,
  tamzirtapozParagraph2,
} from "../information";
import {
  marketParagraph1,
  marketContent,
  marketParagraph2,
} from "../information";

import useSound from "use-sound";
import pageFlip from "../soundEffects/pageFlip.mp3";

const Projects = ({ pageWidth, pageYPosition, navbarSpace }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [detailsData, setDetailsData] = useState({
    title: "",
    paragraph1: "",
    photos: [],
    ulItems: [],
    paragraph2: "",
  });
  const [playPageFlip] = useSound(pageFlip);

  return (
    <>
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

        {/* main tamzirtapoz */}

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
                Project Tamzirtapoz {`(React.js Part)`}
              </h4>
              <a
                href="https://tamzirtapoz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the tamzirtapoz web application while working
              </a>
              <p className="text-dark">{tamzirtapozParagraph1}</p>
              <div className="d-flex m-0 p-0 justify-content-around flex-wrap">
                <div className="container-fluid m-0 p-0">
                  <ol>
                    {tamzirtapozContent.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.title}{" "}
                          <button
                            className="text-primary"
                            style={{
                              border: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(0,0,0,0)",
                              background: "rgba(0,0,0,0)",
                            }}
                            onClick={() => {
                              setDetailsData(item);
                              playPageFlip();
                              setShowDetailsModal(true);
                            }}
                          >
                            details
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div className="d-flex justify-content-around m-1 p-1 flex-wrap">
                  {pageWidth > 726 ? (
                    <>
                      <div className="d-flex m-0 p-1">
                        <img
                          onClick={() => {}}
                          className="img-fluid"
                          src={welcome}
                          alt="welcome"
                          style={{ maxHeight: "200px" }}
                        />
                      </div>
                      <div className="d-flex m-0 p-1">
                        <img
                          className="img-fluid"
                          src={messaging1}
                          alt="messaging"
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
                Source Code on GitHub{" "}
                <GoMarkGithub style={{ fontSize: "20px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* market tamzirtapoz */}

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
                Project Market {`(React.js Part)`}
              </h4>
              <a
                href="https://market-tamzirtapoz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the market web application in action
              </a>
              <p className="text-dark">{marketParagraph1}</p>
              <div className="d-flex m-0 p-0 justify-content-around flex-wrap">
                <div className="container-fluid m-0 p-0">
                  <ol>
                    {marketContent.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.title}{" "}
                          <button
                            className="text-primary"
                            style={{
                              border: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(0,0,0,0)",
                              background: "rgba(0,0,0,0)",
                            }}
                            onClick={() => {
                              setDetailsData(item);
                              playPageFlip();
                              setShowDetailsModal(true);
                            }}
                          >
                            details
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <div className="d-flex justify-content-around m-1 p-1 flex-wrap">
                  {pageWidth > 726 ? (
                    <>
                      <div className="d-flex m-0 p-1">
                        <img
                          onClick={() => {}}
                          className="img-fluid"
                          src={welcome}
                          alt="welcome"
                          style={{ maxHeight: "200px" }}
                        />
                      </div>
                      <div className="d-flex m-0 p-1">
                        <img
                          className="img-fluid"
                          src={messaging1}
                          alt="messaging"
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
              <p>{marketParagraph2}</p>
              <a
                href="https://github.com/tamzirtapoz/tamzirtapoz-Main-Frontend-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code on GitHub{" "}
                <GoMarkGithub style={{ fontSize: "20px" }} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showDetailsModal}
        style={{ background: "rgba(0,188,212,0.3)" }}
        onHide={() => {
          setShowDetailsModal(false);
        }}
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div
              className="d-flex justify-content-end"
              style={{ position: "absolute", width: "93%" }}
            >
              <button
                className="btn btn-danger"
                style={{ position: "fixed", zIndex: "2500" }}
                onClick={() => {
                  setShowDetailsModal(false);
                }}
              >
                X
              </button>
            </div>
            <h3 className="">{detailsData.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{detailsData.paragraph1}</p>
          <div className="d-flex justify-content-around align-items-center flex-wrap bg-dark">
            {detailsData.photos.map((photo, index) => {
              return (
                <img
                  src={photo}
                  alt="Details"
                  key={index}
                  className="img-fluid m-2 rounded"
                  style={{ maxWidth: "50vw", width: "250px" }}
                />
              );
            })}
          </div>
          <ul>
            {detailsData.ulItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p>{detailsData.paragraph2}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-capitalize"
            variant="danger"
            onClick={() => {
              setShowDetailsModal(false);
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Projects;
