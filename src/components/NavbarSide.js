import React from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import useSound from "use-sound";

import clickEffect1 from "../soundEffects/clickEffect1.mp3";

const NavbarSide = ({ navbarSpace }) => {
  const [playClickEffect1] = useSound(clickEffect1);

  const handleClick = (e, adress) => {
    e.preventDefault();
    playClickEffect1();
    window.scrollTo({
      left: 0,
      top: document.getElementById(adress).offsetTop - navbarSpace,
    });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-sm d-flex justify-content-between sticky-top p-0 m-0  align-top 
       
  `}
      >
        <div
          className="container-fluid m-0 p-0 align-items-center navConfigure"
          style={{ width: "100%", height: navbarSpace }}
        >
          <div className="d-flex p-0 m-0 justify-content-around flex-wrap align-items-center">
            <h4 className="navTextColorBrand m-1 rounded text-center m-0 p-0">
              Görkem B. Saraç{" "}
              <span>
                <a
                  href="https://github.com/tamzirtapoz"
                  target="_blank"
                  rel="noreferrer"
                  className="linkWithoutBlueLine m-0 p-0"
                >
                  <IconContext.Provider
                    value={{
                      color: "rgba(150, 150, 150, 1)",
                      className: "global-class-name",
                      size: "30px",
                    }}
                  >
                    <GoMarkGithub />
                  </IconContext.Provider>
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/g%C3%B6rkem-bu%C4%9Fra-sara%C3%A7-3458b0149/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkWithoutBlueLine m-0 p-0"
                >
                  <IconContext.Provider
                    value={{
                      color: "rgba(150, 150, 150, 1)",
                      className: "global-class-name",
                      size: "30px",
                    }}
                  >
                    <SiLinkedin />
                  </IconContext.Provider>
                </a>
              </span>
            </h4>
          </div>
          <div
            className={`${"d-flex justify-content-around"} navbar-collapse p-0 m-0 `}
            id="navbarSupportedContent"
          >
            <div className="navTextColor pr-2 pl-2 m-0">
              <h1 className="m-0 p-0">
                <button
                  className="m-0 p-0 navTextColor"
                  onClick={(e) => {
                    handleClick(e, "aboutPage");
                  }}
                  style={{ background: "rgba(0,0,0,0)", border: "0px" }}
                >
                  About
                </button>
              </h1>
            </div>

            <div className="navTextColor pr-2 pl-2 m-0">
              <h1 className="m-0 p-0">
                <button
                  className="m-0 p-0 navTextColor"
                  onClick={(e) => {
                    handleClick(e, "projectsPage");
                  }}
                  style={{ background: "rgba(0,0,0,0)", border: "0px" }}
                >
                  Projects
                </button>
              </h1>
            </div>

            <div className="navTextColor pr-2 pl-2 m-0">
              <h1 className="m-0 p-0">
                <button
                  className="m-0 p-0 navTextColor"
                  onClick={(e) => {
                    handleClick(e, "contactsPage");
                  }}
                  style={{ background: "rgba(0,0,0,0)", border: "0px" }}
                >
                  Contacts
                </button>
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSide;
