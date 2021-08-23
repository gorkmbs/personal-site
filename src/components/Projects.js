import React, { useState, useEffect } from "react";
import welcome from "../assets/welcome.png";
import animals from "../assets/animals.jpg";
import videos from "../assets/videos.png";
import messaging1 from "../assets/messaging1.jpg";
import sidebar1 from "../assets/market/sidebar1.jpg";
import addBag1 from "../assets/market/addBag1.jpg";
import payment2 from "../assets/market/payment2.jpg";
import bot1 from "../assets/bot1.png";

import generalMain1 from "../assets/market/generalMain1.png";
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

import {
  backendNodeParagraph1,
  backendNodeContent,
  backendNodeParagraph2,
} from "../information";

import { educational } from "../information";

import useSound from "use-sound";
import pageFlip from "../soundEffects/pageFlip.mp3";

const tamzirtapozImages = [welcome, bot1, animals, videos, messaging1];
const marketTamzirtapozImages = [sidebar1, addBag1, payment2, generalMain1];

const Projects = ({ pageWidth, pageYPosition, navbarHeight, urlServer }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [detailsData, setDetailsData] = useState({
    title: "",
    paragraph1: "",
    photos: [],
    ulItems: [],
    paragraph2: "",
  });
  const [showBiggerImageModal, setShowBiggerImageModal] = useState(false);
  const [currentBigImage, setCurrentBigImage] = useState(animals);
  const [showBackground, setShowBackground] = useState(true);
  const [playPageFlip] = useSound(pageFlip);

  useEffect(() => {
    let edu = document.getElementById("education");
    let eduH = edu.offsetTop;
    if (Number(eduH) - Number(navbarHeight) - 150 < pageYPosition) {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }
    // eslint-disable-next-line
  }, [pageYPosition]);

  return (
    <>
      <div className="bg-red-600" style={{ height: "2px" }}></div>
      <div
        id="projects"
        className={`flex flex-col m-0 p-0 bg-gray-900 transition duration-1000 ease ${
          showBackground ? "" : "bg-opacity-0"
        } justify-center items-center`}
        style={{ minHeight: "350px", zIndex: 6, width: "100%" }}
      >
        <div
          className="flex justify-center w-full h-16 md:h-20 items-center text-gray-100 text-3xl bg-gray-900"
          style={{
            position: "sticky",
            top: pageWidth >= 768 ? "80px" : "64px",
          }}
        >
          <h1 className="cursor-default">
            <span
              className={`transition duration-1000 ease ${
                !showBackground ? "" : "text-red-500"
              }`}
            >
              Projects
            </span>{" "}
            and{" "}
            <span
              className={`transition duration-1000 ease ${
                !showBackground ? "text-red-500" : ""
              }`}
            >
              Education
            </span>
          </h1>
        </div>

        {/* main tamzirtapoz */}

        <div
          className="flex m-4 p-2 justify-center flex-wrap items-center"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <div className="flex m-0 p-0 justify-center flex-wrap items-center">
            <div
              className="m-0 p-4 bg-gray-800 w-full"
              style={{
                // background: "rgba(255,255,255,0.7)",
                border: "3px",
                borderStyle: "hidden",
                borderColor: "rgba(0,0,0,0)",
                borderRadius: "50px",
              }}
            >
              <h4
                className="text-center text-red-400 text-xl my-8 cursor-default"
                style={{ textShadow: "10px 10px 5px rgba(0, 0, 0, 0.2)" }}
              >
                Project Tamzirtapoz {`(React.js)`}
              </h4>
              <a
                href="https://tamzirtapoz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-mono"
              >
                See the tamzirtapoz web application while working
              </a>
              <div className="flex m-0 p-0 justify-around flex-wrap w-full">
                <div className="flex flex-col justify-center m-0 p-0 lg:w-1/2">
                  <p className="text-gray-100 mt-4 text-justify">
                    {tamzirtapozParagraph1}
                  </p>
                  <ol className="list-decimal text-gray-100 m-4">
                    {tamzirtapozContent.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.title}{" "}
                          <button
                            className="text-red-500"
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
                <div className="flex justify-around m-0 p-1 flex-wrap lg:w-1/2">
                  {pageWidth > 726 ? (
                    <>
                      {tamzirtapozImages.map((item, index) => {
                        return (
                          <div key={index} className="flex m-0 p-1">
                            <img
                              onClick={() => {
                                setCurrentBigImage(item);
                                setShowBiggerImageModal(true);
                              }}
                              className="m-4 cursor-pointer"
                              src={item}
                              alt="welcome"
                              style={{ maxHeight: "200px" }}
                            />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <div className="flex m-0 p-1">
                        <img
                          onClick={() => {
                            setCurrentBigImage(tamzirtapozImages[3]);
                            setShowBiggerImageModal(true);
                          }}
                          className="img-fluid"
                          src={tamzirtapozImages[3]}
                          alt="animals"
                          style={{ height: "200px" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <p className="text-gray-100 my-4">{tamzirtapozParagraph2}</p>
              <a
                href="https://github.com/tamzirtapoz/tamzirtapoz-Main-Frontend-React"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                Source Code on GitHub{" "}
                <GoMarkGithub
                  style={{ fontSize: "20px" }}
                  className="inline-block"
                />
              </a>
            </div>
          </div>
        </div>

        {/* market tamzirtapoz */}

        <div
          className="flex m-4 p-2 justify-center flex-wrap items-center"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <div className="flex m-0 p-0 justify-center flex-wrap items-center">
            <div
              className="m-0 p-4 bg-gray-800 w-full"
              style={{
                // background: "rgba(255,255,255,0.7)",
                border: "3px",
                borderStyle: "hidden",
                borderColor: "rgba(0,0,0,0)",
                borderRadius: "50px",
              }}
            >
              <h4
                className="text-center text-red-400 text-xl my-8 cursor-default"
                style={{ textShadow: "10px 10px 5px rgba(0, 0, 0, 0.2)" }}
              >
                Project Market {`(React.js)`}
              </h4>
              <a
                className="text-blue-400 font-mono"
                href="https://market-tamzirtapoz.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the market web application in action
              </a>
              <div className="flex m-0 p-0 justify-around flex-wrap w-full">
                <div className="flex flex-col justify-center m-0 p-0 lg:w-1/2">
                  <p className="text-gray-100 mt-4 text-justify">
                    {marketParagraph1}
                  </p>
                  <ol className="list-decimal text-gray-100 m-4">
                    {marketContent.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.title}{" "}
                          <button
                            className="text-red-500"
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
                <div className="flex justify-around m-0 p-1 flex-wrap lg:w-1/2">
                  {pageWidth > 726 ? (
                    <>
                      {marketTamzirtapozImages.map((item, index) => {
                        return (
                          <div key={index} className="flex m-0 p-1">
                            <img
                              onClick={() => {
                                setCurrentBigImage(item);
                                setShowBiggerImageModal(true);
                              }}
                              className="m-4 cursor-pointer"
                              src={item}
                              alt="welcome"
                              style={{ maxHeight: "200px" }}
                            />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <div className="flex m-0 p-1">
                        <img
                          onClick={() => {
                            setCurrentBigImage(marketTamzirtapozImages[1]);
                            setShowBiggerImageModal(true);
                          }}
                          className="m-4 cursor-pointer"
                          src={marketTamzirtapozImages[1]}
                          alt="animals"
                          style={{ height: "200px" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <p className="text-gray-100 my-4">{marketParagraph2}</p>
              <a
                href="https://github.com/tamzirtapoz/tamzirtapoz-marketPlace-Frontend-React-Redux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                Source Code on GitHub{" "}
                <GoMarkGithub
                  style={{ fontSize: "20px" }}
                  className="inline-block"
                />
              </a>
            </div>
          </div>
        </div>

        {/* tamzirtapoz node.js api */}

        <div
          className="flex m-4 p-2 justify-center flex-wrap items-center"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <div className="flex m-0 p-0 justify-center flex-wrap items-center">
            <div
              className="m-0 p-4 bg-gray-800 w-full text-gray-100"
              style={{
                // background: "rgba(255,255,255,0.7)",
                border: "3px",
                borderStyle: "hidden",
                borderColor: "rgba(0,0,0,0)",
                borderRadius: "50px",
              }}
            >
              <h4
                className="text-center text-red-400 text-xl my-8 cursor-default"
                style={{ textShadow: "10px 10px 5px rgba(0, 0, 0, 0.2)" }}
              >
                Tamzirtapoz API {`(Node.js Part)`}
              </h4>
              <h5 className="text-red-500 mt-4 p-0">
                Example page that requires authentication:
              </h5>
              <a
                href={urlServer + "/users/protected"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-mono"
              >
                User's Protected Area
              </a>
              <h5 className="text-green-500 mt-4 p-0">
                Example pages that do not require authentication:
              </h5>
              <a
                href={urlServer + "/downloads/open-personal-cv"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-mono"
              >
                See my CV via Tamzirtapoz API
              </a>
              <br />
              {" or "}
              <br />
              <a
                href={urlServer + "/market/categories"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-mono"
              >
                Category list from Tamzirtapoz API
              </a>
              <br />
              {" or "}
              <br />
              <a
                href={urlServer + "/market/all-products"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-mono"
              >
                Products list from Tamzirtapoz API
              </a>
              <div className="flex m-0 p-0 justify-around flex-wrap w-full">
                <div className="flex flex-col justify-center items-start m-0 p-0">
                  <p className="mt-4 text-justify">{backendNodeParagraph1}</p>
                  <ol className="list-decimal text-gray-100 m-4 w-full">
                    {backendNodeContent.map((item, index) => {
                      return (
                        <li key={index}>
                          {item.title}{" "}
                          <button
                            className="text-red-500"
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
              </div>
              <p>{backendNodeParagraph2}</p>
              <a
                href="https://github.com/tamzirtapoz/tamzirtapoz-Node.js-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                Source Code on GitHub{" "}
                <GoMarkGithub
                  style={{ fontSize: "20px" }}
                  className="inline-block"
                />
              </a>
            </div>
          </div>
        </div>
        <div style={{ height: "20px" }}></div>
        <div className="w-full h-1 bg-blue-700"></div>

        <div className="flex flex-col m-0 p-4" id="education">
          <h1 className="text-center text-red-500 text-3xl mb-8 mt-4">
            Education
          </h1>
          <div className="">
            {educational.map((item, index) => {
              return (
                <div className="flex flex-wrap justify-center" key={index}>
                  <div
                    className="mb-4 p-3 w-full border border-1 border-solid border-red-900 bg-gray-900 bg-opacity-80"
                    style={{
                      maxWidth: "700px",
                      boxShadow: "10px 10px 10px rgba(0,0,0,0.4)",

                      borderRadius: "35px",
                    }}
                  >
                    <h4 className="text-center text-red-100 text-xl">
                      {item.subject}
                    </h4>
                    <h5 className="text-red-300 my-4">Video Courses</h5>
                    <ol className="list-decimal text-gray-100 m-4">
                      {item.videos.map((video, index2) => {
                        return (
                          <li key={index2} className="my-2">
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 font-mono"
                            >
                              {video.title}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
              );
            })}
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
                  onClick={() => {
                    setCurrentBigImage(photo);
                    setShowBiggerImageModal(true);
                  }}
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showBiggerImageModal}
        style={{ background: "rgba(0,0,0,1)" }}
        onHide={() => {
          setShowBiggerImageModal(false);
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
                  setShowBiggerImageModal(false);
                }}
              >
                X
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={currentBigImage}
            alt="Bigger"
            style={{ width: "100%" }}
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Projects;
