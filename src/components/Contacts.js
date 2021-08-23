import React, { useState, useEffect } from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { RiNewspaperLine } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import { VscLoading } from "react-icons/vsc";

const Joi = require("joi");
const axios = require("axios");

const Contacts = ({ urlServer, pageYPosition, pageWidth }) => {
  const [showMailModal, setShowMailModal] = useState(false);
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

  useEffect(() => {
    let testUrl = window.location.pathname;
    if (String(testUrl) === "/direct-mail") {
      if (!openedDirectMail) {
        setShowMailModal(true);
        setOpenedDirectMail(true);
      }
    }
    return () => {};
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
        id="contactsPage"
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
                  href={urlServer + "/downloads/personal-cv"}
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
          <div className="text-white w-full md:w-1/2">
            <h1 className="text-center m-0 p-0">Send An E-Mail</h1>
            <form onSubmit={handleSendMail}>
              <div className="">
                <br />
                <label htmlFor="name">Name</label>
                <input
                  style={{
                    background: isError[0]
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(0,255,0,0.1)",
                  }}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name please"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
                {isError[0] ? (
                  <small id="name" className="text-danger">
                    {error[0].substring(10, 255)}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Your E-Mail Address</label>
                <input
                  style={{
                    background: isError[1]
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(0,255,0,0.1)",
                  }}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Please enter your e-mail"
                  value={yourEmailAddress}
                  onChange={(e) => setYourEmailAddress(e.target.value)}
                />
                {isError[1] ? (
                  <small id="name" className="text-danger">
                    {error[1].substring(18, 255)}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Subject</label>
                <input
                  style={{
                    background: isError[2]
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(0,255,0,0.1)",
                  }}
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject please"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {isError[2] ? (
                  <small id="name" className="text-danger">
                    {error[2].substring(10, 255)}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="paragraph">Your Text</label>
                <textarea
                  style={{
                    background: isError[3]
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(0,255,0,0.1)",
                  }}
                  type="text"
                  className="form-control"
                  id="paragraph"
                  placeholder="Enter your message please"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                ></textarea>
                {isError[3] ? (
                  <small id="name" className="text-danger">
                    {error[3].substring(10, 255)}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <br />
              {isErrorGeneral ? (
                <>
                  {errorGeneral === "Successfully sent !" ? (
                    <>
                      <h1 id="name" className="text-success">
                        {errorGeneral}
                      </h1>
                    </>
                  ) : (
                    <>
                      <h1 id="name" className="text-danger">
                        {errorGeneral}
                      </h1>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
              {isErrorGeneral ? (
                <>
                  <button type="submit" className="btn btn-primary" disabled>
                    {submit}
                    {submit === "Send Mail" ? (
                      ""
                    ) : (
                      <>{<VscLoading className="rotate360" />}</>
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button type="submit" className="btn btn-primary">
                    {submit}
                    {submit === "Send Mail" ? (
                      ""
                    ) : (
                      <>{<VscLoading className="rotate360" />}</>
                    )}
                  </button>
                </>
              )}

              <br />
              <br />
            </form>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showMailModal}
        style={{ background: "rgba(0,0,0,0.3)" }}
        onHide={() => {
          setShowMailModal(false);
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
                  setShowMailModal(false);
                }}
              >
                X
              </button>
            </div>
            <h1 className="text-dark m-0 p-0">Send an e-mail</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSendMail}>
            <div className="form-group">
              <br />
              <label htmlFor="name">Name</label>
              <input
                style={{
                  background: isError[0]
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(0,255,0,0.1)",
                }}
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name please"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
              {isError[0] ? (
                <small id="name" className="text-danger">
                  {error[0].substring(10, 255)}
                </small>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Your E-Mail Address</label>
              <input
                style={{
                  background: isError[1]
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(0,255,0,0.1)",
                }}
                type="email"
                className="form-control"
                id="email"
                placeholder="Please enter your e-mail"
                value={yourEmailAddress}
                onChange={(e) => setYourEmailAddress(e.target.value)}
              />
              {isError[1] ? (
                <small id="name" className="text-danger">
                  {error[1].substring(18, 255)}
                </small>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Subject</label>
              <input
                style={{
                  background: isError[2]
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(0,255,0,0.1)",
                }}
                type="text"
                className="form-control"
                id="subject"
                placeholder="Enter subject please"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {isError[2] ? (
                <small id="name" className="text-danger">
                  {error[2].substring(10, 255)}
                </small>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="paragraph">Your Text</label>
              <textarea
                style={{
                  background: isError[3]
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(0,255,0,0.1)",
                }}
                type="text"
                className="form-control"
                id="paragraph"
                placeholder="Enter your message please"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
              ></textarea>
              {isError[3] ? (
                <small id="name" className="text-danger">
                  {error[3].substring(10, 255)}
                </small>
              ) : (
                ""
              )}
            </div>
            <br />
            {isErrorGeneral ? (
              <>
                {errorGeneral === "Successfully sent !" ? (
                  <>
                    <h1 id="name" className="text-success">
                      {errorGeneral}
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 id="name" className="text-danger">
                      {errorGeneral}
                    </h1>
                  </>
                )}
              </>
            ) : (
              ""
            )}
            {isErrorGeneral ? (
              <>
                <button type="submit" className="btn btn-primary" disabled>
                  {submit}
                  {submit === "Send Mail" ? (
                    ""
                  ) : (
                    <>{<VscLoading className="rotate360" />}</>
                  )}
                </button>
              </>
            ) : (
              <>
                <button type="submit" className="btn btn-primary">
                  {submit}
                  {submit === "Send Mail" ? (
                    ""
                  ) : (
                    <>{<VscLoading className="rotate360" />}</>
                  )}
                </button>
              </>
            )}

            <br />
            <br />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contacts;
