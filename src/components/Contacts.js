import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { RiNewspaperLine } from "react-icons/ri";

const Contacts = ({ urlServer, pageYPosition, navbarSpace }) => {
  return (
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
            <button className="btn btn-primary">Send E-Mail</button>
          </div>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default Contacts;
