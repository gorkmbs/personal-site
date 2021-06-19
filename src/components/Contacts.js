import React, { useState, useEffect } from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { RiNewspaperLine } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import { VscLoading } from "react-icons/vsc";

const Joi = require("joi");
const axios = require("axios");

const Contacts = ({ urlServer, pageYPosition, navbarSpace }) => {
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
    } else {
      setIsErrorGeneral(false);
    }
  }, [yourName, yourEmailAddress, subject, message, showMailModal]);

  return (
    <>
      <div
        className="container-fluid m-0 p-0 contactsPageGeneral"
        id="contactsPage"
        style={{ minHeight: "100vh" }}
      >
        <h1
          className="text-center shadow"
          style={{
            background:
              pageYPosition >
              document.getElementById("contactsPage")?.offsetTop - navbarSpace
                ? "rgb(244, 255, 83)"
                : "rgba(255,255,255,0.2)",
            position: "sticky",
            top: navbarSpace,
          }}
        >
          Contact Information
        </h1>
        <div style={{ height: "50px" }}></div>
        <div className="d-flex m-2 p-2 justify-content-around flex-wrap align-items-center ">
          <div
            className="m-4 p-2"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "5px solid rgba(255,255,255,1)",
              borderRadius: "15px",
            }}
          >
            <h1 className="text-center">
              <RiNewspaperLine />
            </h1>
            <h3 className="text-center">CV</h3>
            <div className="d-flex justify-content-center ">
              <a
                className="text-center"
                href={urlServer + "/downloads/personal-cv"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
            <p className="text-center m-1 p-0">or</p>
            <a
              href={urlServer + "/downloads/open-personal-cv"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on Browser
            </a>
          </div>
          <div
            className="m-4 p-2"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "5px solid rgba(255,255,255,1)",
              borderRadius: "15px",
            }}
          >
            <h1 className="text-center">
              <GoMarkGithub />
            </h1>
            <h3 className="text-center">GitHub</h3>
            <a
              href="https://github.com/tamzirtapoz"
              target="_blank"
              rel="noreferrer"
              className="linkWithoutBlueLine m-0 p-0"
            >
              Visit GitHub Profile
            </a>
          </div>
          <div
            className="m-4 p-2"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "5px solid rgba(255,255,255,1)",
              borderRadius: "15px",
            }}
          >
            <h1 className="text-center">
              <SiLinkedin />
            </h1>
            <h3 className="text-center">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/g%C3%B6rkem-bu%C4%9Fra-sara%C3%A7-3458b0149/"
              target="_blank"
              rel="noreferrer"
              className="linkWithoutBlueLine m-0 p-0"
            >
              Visit LinkedIn Profile
            </a>
          </div>
          <div
            className="m-4 p-2"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "5px solid rgba(255,255,255,1)",
              borderRadius: "15px",
            }}
          >
            <h1 className="text-center">
              <FiMail />
            </h1>
            <h3 className="text-center">E-Mail</h3>
            <p>gorkembsarac@gmail.com</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => setShowMailModal(true)}
              >
                Send E-Mail
              </button>
            </div>
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
              <h1 id="name" className="text-danger">
                {errorGeneral}
              </h1>
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
