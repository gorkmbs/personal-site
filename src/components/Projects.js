import React, { useState, useEffect, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import welcome from "../assets/welcome.png";
import animals from "../assets/animals.jpg";
import videos from "../assets/videos.png";
import messaging1 from "../assets/messaging1.jpg";
import sidebar1 from "../assets/market/sidebar1.jpg";
import addBag1 from "../assets/market/addBag1.jpg";
import payment2 from "../assets/market/payment2.jpg";
import bot1 from "../assets/bot1.png";
import nightSky from "../assets/nightSky.jpg";
import apple from "../assets/apple.JPG";
import firework from "../assets/firework.mp4";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

import generalMain1 from "../assets/market/generalMain1.png";
import { GoMarkGithub } from "react-icons/go";
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

import {
  napParagraph1,
  napContent,
  napParagraph2,
  napImages,
} from "../information";

import {
  bankParagraph1,
  bankContent,
  bankParagraph2,
  bankImages,
} from "../information";

import { educational } from "../information";

import useSound from "use-sound";
import pageFlip from "../soundEffects/pageFlip.mp3";

const tamzirtapozImages = [welcome, bot1, animals, videos, messaging1];
const marketTamzirtapozImages = [sidebar1, addBag1, payment2, generalMain1];

const Projects = ({ pageWidth, pageYPosition, navbarHeight, urlServer }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFirework, setShowFirework] = useState(false);
  const [detailsData, setDetailsData] = useState({
    title: "",
    paragraph1: "",
    photos: [],
    ulItems: [],
    paragraph2: "",
  });
  const [showBiggerImageModal, setShowBiggerImageModal] = useState(false);
  const [currentBigImage, setCurrentBigImage] = useState(animals);
  const [currentBigImageArray, setCurrentBigImageArray] = useState([]);
  const [currentBigImageIndex, setcurrentBigImageIndex] = useState(0);
  const [showBackground, setShowBackground] = useState(true);
  const [linkedFromDetails, setLinkedFromDetails] = useState(false);
  const [playPageFlip] = useSound(pageFlip);

  const cancelButtonRef1 = useRef(null);
  const cancelButtonRef2 = useRef(null);
  const data = useRef(null);
  data.current = linkedFromDetails;

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

  const imageClose = () => {
    setShowBiggerImageModal(false);
    if (data.current) {
      setTimeout(() => {
        setLinkedFromDetails(false);
        setShowDetailsModal(true);
      }, 500);
    }
  };

  const changeImage = (way) => {
    if (way === "next") {
      if (currentBigImageArray.length - 1 === currentBigImageIndex) {
        setCurrentBigImage(currentBigImageArray[0]);
        setcurrentBigImageIndex(0);
      } else {
        setCurrentBigImage(currentBigImageArray[currentBigImageIndex + 1]);
        setcurrentBigImageIndex(currentBigImageIndex + 1);
      }
    } else if (way === "prev") {
      if (currentBigImageIndex === 0) {
        setCurrentBigImage(
          currentBigImageArray[currentBigImageArray.length - 1]
        );
        setcurrentBigImageIndex(currentBigImageArray.length - 1);
      } else {
        setCurrentBigImage(currentBigImageArray[currentBigImageIndex - 1]);
        setcurrentBigImageIndex(currentBigImageIndex - 1);
      }
    }
  };

  return (
    <>
      <div className="bg-red-600" style={{ height: "2px" }}></div>
      {showBiggerImageModal ? (
        <>
          <button
            className="py-2 px-4 text-red-100 mr-8 bg-red-600 hover:bg-red-500"
            style={{
              position: "fixed",
              right: "10px",
              top: "50px",
              zIndex: "120",
            }}
            onClick={() => {
              imageClose();
            }}
          >
            X
          </button>
          <button
            className="p-4 text-center rounded-full text-red-100 bg-gray-600 bg-opacity-75 hover:bg-gray-500"
            style={{
              position: "fixed",
              right: "10px",
              top: "40vh",
              zIndex: "120",
            }}
            onClick={() => {
              changeImage("next");
            }}
          >
            <div className="flex justify-center items-center">
              <AiOutlineArrowRight className="text-3xl" />
            </div>
          </button>
          <button
            className="p-4 text-center rounded-full text-red-100 bg-gray-600 bg-opacity-75 hover:bg-gray-500"
            style={{
              position: "fixed",
              left: "10px",
              top: "40vh",
              zIndex: "120",
            }}
            onClick={() => {
              changeImage("prev");
            }}
          >
            <div className="flex justify-center items-center">
              <AiOutlineArrowLeft className="text-3xl" />
            </div>
          </button>
          <div
            className="flex justify-center items-center  w-full h-16"
            style={{
              position: "fixed",
              left: "0px",
              bottom: "15px",
              zIndex: "120",
            }}
          >
            <div className="flex bg-gray-900 bg-opacity-100 py-2 px-1 rounded-xl flex-wrap justify-around">
              {currentBigImageArray.map((photo, index) => {
                return (
                  <img
                    src={photo}
                    alt=""
                    key={index}
                    className={` m-1 border border-8 border-solid transition ease transition-1000 cursor-pointer ${
                      index === currentBigImageIndex
                        ? "border-red-600 opacity-100"
                        : "border-gray-900 opacity-25"
                    }`}
                    style={{
                      width: "15vw",
                      maxWidth: "80px",
                      maxHeight: "70px",
                    }}
                    onClick={() => {
                      setcurrentBigImageIndex(index);
                      setCurrentBigImage(photo);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div
        id="projects"
        className={`flex flex-col m-0 p-0 bg-gray-900 transition duration-1000 ease ${
          showBackground ? "" : "bg-opacity-0"
        } justify-center items-center`}
        style={{ minHeight: "350px", zIndex: "6", width: "100%" }}
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
                                setCurrentBigImageArray(tamzirtapozImages);
                                setcurrentBigImageIndex(index);
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
                            setCurrentBigImageArray(tamzirtapozImages);
                            setcurrentBigImageIndex(3);
                          }}
                          className=""
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
                                setCurrentBigImageArray(
                                  marketTamzirtapozImages
                                );
                                setcurrentBigImageIndex(index);
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
                            setCurrentBigImageArray(marketTamzirtapozImages);
                            setcurrentBigImageIndex(1);
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

        {/* Apple Image Part */}
        {showFirework ? (
          <>
            <div
              className="firework-video flex justify-center items-center"
              style={{
                width: "100vw",
                height: "100vh",
                zIndex: "200",
                position: "fixed",
                top: "0px",
                left: "0px",
                backgroundImage: `url(${nightSky})`,
              }}
            >
              <video
                id="video"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              >
                <source id="mp4" src={firework} type="video/mp4" />
                <p>Your user agent does not support the HTML5 Video element.</p>
              </video>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="flex justify-around w-full items center my-8 flex-wrap">
          <div>
            <img className="rounded-3xl" src={apple} alt="apple" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="border border-red-600 border-2 text-gray-100 font-mono text-3xl m-4 p-8">
              <p className="text-center">If you give up, you lose...</p>
            </div>
            <div className="flex w-full justify-center items-center m-8">
              <button
                className="rounded-xl bg-red-600 text-gray-100 px-4 py-2 text-lg hover:bg-green-600 transition ease transition-500"
                onClick={() => {
                  setShowFirework(true);
                  setShowBackground(false);
                  setTimeout(() => {
                    setShowFirework(false);
                    setShowBackground(false);
                  }, 5000);
                }}
              >
                Never Give Up !
              </button>
            </div>
          </div>
        </div>

        {/* Nap Part */}

        <div
          className="flex m-4 p-2 justify-center flex-wrap items-center"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <div className="flex m-0 p-0 justify-center flex-wrap items-center">
            <div
              className="m-0 p-4 bg-gray-800 w-full"
              style={{
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
                Project Napolyon {`(Vue.js)`}
              </h4>

              <div className="flex m-0 p-0 justify-around flex-wrap w-full">
                <div className="flex flex-col justify-center m-0 p-0 lg:w-1/2">
                  <p className="text-gray-100 mt-4 text-justify">
                    {napParagraph1}
                  </p>
                  <ol className="list-decimal text-gray-100 m-4">
                    {napContent.map((item, index) => {
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
                  {napImages.map((item, index) => {
                    return (
                      <div key={index} className="flex m-0 p-1">
                        <img
                          onClick={() => {
                            setCurrentBigImage(item);
                            setShowBiggerImageModal(true);
                            setCurrentBigImageArray(napImages);
                            setcurrentBigImageIndex(index);
                          }}
                          className="m-4 cursor-pointer"
                          src={item}
                          alt="welcome"
                          style={{ maxWidth: "200px" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-gray-100 my-4">{napParagraph2}</p>
            </div>
          </div>
        </div>

        {/* Bank Part */}

        <div
          className="flex m-4 p-2 justify-center flex-wrap items-center"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <div className="flex m-0 p-0 justify-center flex-wrap items-center">
            <div
              className="m-0 p-4 bg-gray-800 w-full"
              style={{
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
                Project Tables and Highcharts {`(Vue.js)`}
              </h4>
              <a
                className="text-blue-400 font-mono"
                href="https://vue-graphic-project.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the tables and highcharts web application in action
              </a>
              <div className="flex m-0 p-0 justify-around flex-wrap w-full">
                <div className="flex flex-col justify-center m-0 p-0 lg:w-1/2">
                  <p className="text-gray-100 mt-4 text-justify">
                    {bankParagraph1}
                  </p>
                  <ol className="list-decimal text-gray-100 m-4">
                    {bankContent.map((item, index) => {
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
                  {bankImages.map((item, index) => {
                    return (
                      <div key={index} className="flex m-0 p-1">
                        <img
                          onClick={() => {
                            setCurrentBigImage(item);
                            setShowBiggerImageModal(true);
                            setCurrentBigImageArray(bankImages);
                            setcurrentBigImageIndex(index);
                          }}
                          className="m-4 cursor-pointer"
                          src={item}
                          alt="welcome"
                          style={{ maxWidth: "200px" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="text-gray-100 my-4">{bankParagraph2}</p>
              <a
                href="https://github.com/tamzirtapoz/Vue-Graphic-Project"
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
      <Transition.Root show={showDetailsModal} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef1}
          onClose={setShowDetailsModal}
          style={{ zIndex: "100" }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-opacity-100 transition-opacity"
                style={{
                  backgroundImage: `url(${nightSky})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block bg-gray-800 align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-2/3">
                <div
                  className="fixed flex justify-end w-full"
                  style={{ top: 20 }}
                >
                  <button
                    className="absolute py-2 px-4 text-red-100 mr-8 bg-red-600 bg-opacity-75"
                    onClick={() => {
                      setShowDetailsModal(false);
                    }}
                  >
                    X
                  </button>
                </div>
                <h3 className="text-center text-gray-100 mt-16 mb-8 lg:text-3xl text-xl">
                  {detailsData.title}
                </h3>
                <p className="text-justify text-gray-200 mb-8 mx-4">
                  {detailsData.paragraph1}
                </p>
                <div className="flex justify-around items-center flex-wrap bg-gray-900 p-4">
                  {detailsData.photos.map((photo, index) => {
                    return (
                      <img
                        onClick={() => {
                          setLinkedFromDetails(true);
                          setShowDetailsModal(false);
                          setCurrentBigImage(photo);
                          setTimeout(() => {
                            setShowBiggerImageModal(true);
                            setCurrentBigImageArray(detailsData.photos);
                            setcurrentBigImageIndex(index);
                          }, 500);
                        }}
                        src={photo}
                        alt="Details"
                        key={index}
                        className="m-2 rounded-lg cursor-pointer"
                        style={{ maxWidth: "50vw", width: "250px" }}
                      />
                    );
                  })}
                </div>
                <ul className="m-8 text-gray-100 list-disc">
                  {detailsData.ulItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <p className="text-gray-100 mx-4">{detailsData.paragraph2}</p>
                <div className="flex justify-center m-4">
                  <button
                    className="capitalize px-4 py-2 bg-red-600 rounded-xl text-gray-100"
                    onClick={() => {
                      setShowDetailsModal(false);
                    }}
                  >
                    close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={showBiggerImageModal} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef2}
          onClose={() => {}}
          style={{ zIndex: "102" }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-opacity-100 transition-opacity"
                style={{
                  backgroundImage: `url(${nightSky})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="sm:inline-block flex items-center align-middle rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-2/3"
                style={{ minHeight: pageWidth < 640 ? "100vh" : "" }}
              >
                <button
                  className="py-0 px-0 text-red-100 mr-8 bg-red-600 bg-opacity-75"
                  style={{
                    position: "fixed",
                    right: "0",
                    top: "0",
                  }}
                  onClick={() => {
                    setShowBiggerImageModal(false);
                  }}
                ></button>
                <div className="flex h-full items-center">
                  <img
                    src={currentBigImage}
                    alt="Bigger"
                    style={{ width: "100%" }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Projects;
