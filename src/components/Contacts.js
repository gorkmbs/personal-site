import React, { useState, useEffect, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { RiNewspaperLine } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
// import { ExclamationCircleIcon } from "@heroicons/react/outline";
// import { BadgeCheckIcon } from "@heroicons/react/outline";
import nightSky from "../assets/nightSky.jpg";

const Joi = require("joi");
const axios = require("axios");

const Contacts = ({
  urlServer,
  pageYPosition,
  pageWidth,
  showMailModal,
  setShowMailModal,
}) => {
  const [yourName, setYourName] = useState("");
  const [yourEmailAddress, setYourEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(["", "", "", ""]);
  const [isError, setIsError] = useState([true, true, true, true]);
  const [errorGeneral, setErrorGeneral] = useState("");
  const [isErrorGeneral, setIsErrorGeneral] = useState(true);
  const [submit, setSubmit] = useState("Send Mail");
  const [openedDirectMail, setOpenedDirectMail] = useState(false);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    let testUrl = window.location.pathname;
    if (String(testUrl) === "/direct-mail") {
      if (!openedDirectMail) {
        setShowMailModal(true);
        setOpenedDirectMail(true);
      }
    }
    return () => {};
    // eslint-disable-next-line
  }, [openedDirectMail]);

  const handleSendMail = (e) => {
    e.preventDefault();
    setSubmit("Sending");
    axios({
      method: "post",
      url: urlServer + "/users/mail-from-portfolio",
      data: { subject, yourName, yourEmailAddress, message },
    })
      .then((response) => {
        if (response.data.success === true) {
          setIsErrorGeneral(true);
          setErrorGeneral("Successfully sent !");
          setSubmit("Send Mail");
        } else {
          setIsErrorGeneral(true);
          setErrorGeneral("Server Side Error !");
          setSubmit("Send Mail");
        }
      })
      .catch((err) => {
        setIsErrorGeneral(true);
        setErrorGeneral("An Error Occured !");
        setSubmit("Send Mail");
      });
  };

  useEffect(() => {
    let localError = ["", "", "", ""];
    let localIsError = [true, true, true, true];

    const schema0 = Joi.object({
      yourName: Joi.string().trim().required().min(2).max(30),
    });
    const checker0 = {
      yourName,
    };
    const validation0 = schema0.validate(checker0);
    if (validation0.error) {
      localError[0] = validation0.error.details[0].message;
      localIsError[0] = true;
    } else {
      localError[0] = "";
      localIsError[0] = false;
    }
    const schema1 = Joi.object({
      yourEmailAddress: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .min(4)
        .max(50),
    });
    const checker1 = {
      yourEmailAddress,
    };
    const validation1 = schema1.validate(checker1);
    if (validation1.error) {
      localError[1] = validation1.error.details[0].message;
      localIsError[1] = true;
    } else {
      localError[1] = "";
      localIsError[1] = false;
    }
    const schema2 = Joi.object({
      subject: Joi.string().trim().required().min(3).max(40),
    });
    const checker2 = {
      subject,
    };
    const validation2 = schema2.validate(checker2);
    if (validation2.error) {
      localError[2] = validation2.error.details[0].message;
      localIsError[2] = true;
    } else {
      localError[2] = "";
      localIsError[2] = false;
    }
    const schema3 = Joi.object({
      message: Joi.string().trim().required().min(3).max(300),
    });
    const checker3 = {
      message,
    };
    const validation3 = schema3.validate(checker3);
    if (validation3.error) {
      localError[3] = validation3.error.details[0].message;
      localIsError[3] = true;
    } else {
      localError[3] = "";
      localIsError[3] = false;
    }

    setError(localError);
    setIsError(localIsError);

    if (localError[0] || localError[1] || localError[2] || localError[3]) {
      setIsErrorGeneral(true);
      setErrorGeneral("");
    } else {
      setIsErrorGeneral(false);
      setErrorGeneral("");
    }
  }, [yourName, yourEmailAddress, subject, message, showMailModal]);

  return (
    <>
      <div className="bg-red-600" style={{ height: "2px" }}></div>
      <div
        className="flex flex-col m-0 p-0 contactsPageGeneral bg-gray-900"
        id="contacts"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="flex justify-center w-full h-16 md:h-20 items-center text-gray-100 text-3xl bg-gray-900"
          style={{
            position: "sticky",
            top: pageWidth >= 768 ? "80px" : "64px",
          }}
        >
          <h1 className="cursor-default text-gray-100">Contact Information</h1>
        </div>
        <div
          className="flex lg:flex-row flex-col m-0 p-0 w-full justify-center items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="flex p-4 justify-around flex-wrap items-center w-full lg:w-1/2">
            <div
              className="m-2 p-2 w-52 h-48 bg-gray-300 flex flex-col justify-center items-center"
              style={{
                border: "5px solid #ef4444",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-center itemx-center w-full text-6xl">
                <RiNewspaperLine />
              </div>
              <h3 className="text-center">CV</h3>
              <div className="flex justify-center w-full">
                <a
                  className="text-center text-blue-600"
                  href={urlServer + "/downloads/pdf/personal-cv"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
              <p className="text-center m-1 p-0">or</p>
              <div className="flex justify-center ">
                <a
                  className="text-center text-blue-600"
                  href={urlServer + "/downloads/open-personal-cv"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open on Browser
                </a>
              </div>
            </div>
            <div
              className="m-2 p-2 w-52 h-48 bg-gray-300 flex flex-col justify-center items-center"
              style={{
                border: "5px solid #ef4444",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-center itemx-center w-full text-6xl">
                <GoMarkGithub />
              </div>
              <h3 className="text-center mt-4">GitHub</h3>
              <div className="flex justify-center ">
                <a
                  href="https://github.com/tamzirtapoz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 m-0 p-0"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
            <div
              className="m-2 p-2 w-52 h-48 bg-gray-300 flex flex-col justify-center items-center"
              style={{
                border: "5px solid #ef4444",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-center itemx-center w-full text-6xl">
                <SiLinkedin />
              </div>
              <h3 className="text-center mt-4">LinkedIn</h3>
              <div className="flex justify-center ">
                <a
                  href="https://www.linkedin.com/in/g%C3%B6rkem-bu%C4%9Fra-sara%C3%A7-3458b0149/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 m-0 p-0"
                >
                  Visit LinkedIn Profile
                </a>
              </div>
            </div>
            <div
              className="m-2 p-2 w-52 h-48 bg-gray-300 flex flex-col justify-center items-center"
              style={{
                border: "5px solid #ef4444",
                borderRadius: "15px",
              }}
            >
              <div className="flex justify-center itemx-center w-full text-6xl">
                <FiMail />
              </div>
              <h3 className="text-center mt-4">E-Mail</h3>
              <p className="text-center">gorkembsarac@gmail.com</p>
              <div className="d-flex justify-content-center">
                <button
                  className="bg-red-600 px-4 py-2 rounded-xl mt-2 text-red-100"
                  onClick={() => setShowMailModal(true)}
                >
                  Send E-Mail
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2 p-4">
            <div className="bg-gray-700 rounded-xl p-4">
              <h1 className="text-center m-0 p-0 text-gray-100">
                Send An E-Mail
              </h1>
              <div
                style={{ height: "2px" }}
                className="bg-red-600 mt-2 mb-4"
              ></div>
              <form onSubmit={handleSendMail}>
                <div className="text-gray-100">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    style={{
                      background: isError[0] ? "" : "rgba(50,155,50,0.7)",
                    }}
                    type="text"
                    className="w-64 sm:w-96 my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                    id="name"
                    placeholder="Your name please"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                  />
                  <br />
                  {isError[0] ? (
                    <small id="name" className="text-red-100">
                      Name {error[0].substring(10, 255)}
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <div className="text-gray-100">
                  <label htmlFor="password">Your E-Mail Address</label>
                  <br />
                  <input
                    style={{
                      background: isError[1] ? "" : "rgba(50,155,50,0.7)",
                    }}
                    type="email"
                    className="w-64 sm:w-96 my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                    id="email"
                    placeholder="Please enter your e-mail"
                    value={yourEmailAddress}
                    onChange={(e) => setYourEmailAddress(e.target.value)}
                  />
                  <br />
                  {isError[1] ? (
                    <small id="email" className="text-red-100">
                      Email {error[1].substring(18, 255)}
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <div className="text-gray-100">
                  <label htmlFor="subject">Subject</label>
                  <br />
                  <input
                    style={{
                      background: isError[2] ? "" : "rgba(50,155,50,0.7)",
                    }}
                    type="text"
                    className="w-64 sm:w-96 my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                    id="subject"
                    placeholder="Enter subject please"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <br />
                  {isError[2] ? (
                    <small id="subject" className="text-red-100">
                      Subject {error[2].substring(10, 255)}
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <div className="text-gray-100">
                  <label htmlFor="paragraph">Your Text</label>
                  <br />
                  <textarea
                    style={{
                      background: isError[3] ? "" : "rgba(50,155,50,0.7)",
                    }}
                    type="text"
                    className="w-64 sm:w-96 my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                    id="paragraph"
                    placeholder="Enter your message please"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                  ></textarea>
                  <br />
                  {isError[3] ? (
                    <small id="paragraph" className="text-red-100">
                      Text {error[3].substring(10, 255)}
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <br />
                <div className="flex justify-center my-2">
                  {isErrorGeneral ? (
                    <>
                      {errorGeneral === "Successfully sent !" ? (
                        <>
                          <h1 id="name" className="text-green-200">
                            {errorGeneral}
                          </h1>
                        </>
                      ) : (
                        <>
                          <h1 id="name" className="text-red-200">
                            {errorGeneral}
                          </h1>
                        </>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-center">
                  {isErrorGeneral ? (
                    <>
                      <button
                        type="submit"
                        className="bg-red-600 text-gray-100 px-4 py-2 rounded-lg"
                        disabled
                      >
                        <div>
                          <p>
                            {submit}
                            {submit === "Send Mail" ? (
                              ""
                            ) : (
                              <>
                                <VscLoading className="rotate360 inline-block" />
                              </>
                            )}
                          </p>
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="bg-red-600 text-gray-100 px-4 py-2 rounded-lg"
                      >
                        <div>
                          <p>
                            {submit}
                            {submit === "Send Mail" ? (
                              ""
                            ) : (
                              <>
                                <VscLoading className="rotate360 inline-block" />
                              </>
                            )}
                          </p>
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
      </div>
      <Transition.Root show={showMailModal} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setShowMailModal}
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
              <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div
                  className="fixed flex justify-end w-full"
                  style={{ top: 20 }}
                >
                  <button
                    className="absolute py-2 px-4 text-red-100 mr-8 bg-red-600 bg-opacity-75"
                    onClick={() => {
                      setShowMailModal(false);
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="bg-gray-700 rounded-xl p-4 pt-8">
                  <h1 className="text-center m-0 p-0 text-gray-100">
                    Send An E-Mail
                  </h1>

                  <div
                    style={{ height: "2px" }}
                    className="bg-red-600 mt-2 mb-4"
                  ></div>
                  <form onSubmit={handleSendMail}>
                    <div className="text-gray-100">
                      <label htmlFor="name">Name</label>
                      <br />
                      <input
                        style={{
                          background: isError[0] ? "" : "rgba(50,155,50,0.7)",
                        }}
                        type="text"
                        className="w-full my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                        id="name"
                        placeholder="Your name please"
                        value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                      />
                      <br />
                      {isError[0] ? (
                        <small id="name" className="text-red-100">
                          Name {error[0].substring(10, 255)}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <br />
                    <div className="text-gray-100">
                      <label htmlFor="password">Your E-Mail Address</label>
                      <br />
                      <input
                        style={{
                          background: isError[1] ? "" : "rgba(50,155,50,0.7)",
                        }}
                        type="email"
                        className="w-full my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                        id="email"
                        placeholder="Please enter your e-mail"
                        value={yourEmailAddress}
                        onChange={(e) => setYourEmailAddress(e.target.value)}
                      />
                      <br />
                      {isError[1] ? (
                        <small id="email" className="text-red-100">
                          Email {error[1].substring(18, 255)}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <br />
                    <div className="text-gray-100">
                      <label htmlFor="subject">Subject</label>
                      <br />
                      <input
                        style={{
                          background: isError[2] ? "" : "rgba(50,155,50,0.7)",
                        }}
                        type="text"
                        className="w-full my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                        id="subject"
                        placeholder="Enter subject please"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <br />
                      {isError[2] ? (
                        <small id="subject" className="text-red-100">
                          Subject {error[2].substring(10, 255)}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <br />
                    <div className="text-gray-100">
                      <label htmlFor="paragraph">Your Text</label>
                      <br />
                      <textarea
                        style={{
                          background: isError[3] ? "" : "rgba(50,155,50,0.7)",
                        }}
                        type="text"
                        className="w-full my-2 p-2 bg-gray-600 placeholder-gray-100 text-xl text-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-blue-900 transition ease transition-1000"
                        id="paragraph"
                        placeholder="Enter your message please"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="3"
                      ></textarea>
                      <br />
                      {isError[3] ? (
                        <small id="paragraph" className="text-red-100">
                          Text {error[3].substring(10, 255)}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <br />
                    <div className="flex justify-center my-2">
                      {isErrorGeneral ? (
                        <>
                          {errorGeneral === "Successfully sent !" ? (
                            <>
                              <h1 id="name" className="text-green-200">
                                {errorGeneral}
                              </h1>
                            </>
                          ) : (
                            <>
                              <h1 id="name" className="text-red-200">
                                {errorGeneral}
                              </h1>
                            </>
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex justify-center">
                      {isErrorGeneral ? (
                        <>
                          <button
                            type="submit"
                            className="bg-red-600 text-gray-100 px-4 py-2 rounded-lg"
                            disabled
                          >
                            <div>
                              <p>
                                {submit}
                                {submit === "Send Mail" ? (
                                  ""
                                ) : (
                                  <>
                                    <VscLoading className="rotate360 inline-block" />
                                  </>
                                )}
                              </p>
                            </div>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="submit"
                            className="bg-red-600 text-gray-100 px-4 py-2 rounded-lg"
                          >
                            <div>
                              <p>
                                {submit}
                                {submit === "Send Mail" ? (
                                  ""
                                ) : (
                                  <>
                                    <VscLoading className="rotate360 inline-block" />
                                  </>
                                )}
                              </p>
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Contacts;
