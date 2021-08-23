import React from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
// import { FiMenu } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";

const NavbarSide = ({
  classForMenuToggle,
  toggleNavbar,
  pageYPosition,
  navbarHeight,
}) => {
  const handleClick = (e, adress) => {
    e.preventDefault();
    // playClickEffect1();
    window.scrollTo({
      left: 0,
      top: document.getElementById(adress).offsetTop - navbarHeight,
    });
  };
  return (
    <>
      <div className="flex h-20 items-center px-8 absolute">
        <div className="ml-4 pr-4 border-r border-r-2 border-gray-100">
          <a
            href="https://www.linkedin.com/in/g%C3%B6rkem-bu%C4%9Fra-sara%C3%A7-3458b0149/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-gray-200 text-2xl opacity-80 bg-gray-900" />
          </a>
        </div>
        <div className="ml-4 pr-4 border-r border-r-2 border-gray-100">
          <a
            href="https://github.com/tamzirtapoz"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithubInverted className="text-gray-200 text-2xl opacity-80 bg-gray-900" />
          </a>
        </div>
        <div className="ml-4 pr-4 ">
          <a
            href="https://www.instagram.com/gorkembs.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram className="text-gray-200 text-2xl opacity-80 bg-gray-900" />
          </a>
        </div>
      </div>
      <nav
        className={`${pageYPosition > 60 ? "bg-gray-900" : ""} md:h-20 h-16`}
        style={{
          position: "fixed",
          top: pageYPosition > 60 ? 0 : 60,
          left: 0,
          zIndex: 60,
          width: "100vw",
          borderBottom: "2px",
          borderStyle: "solid",
          borderColor:
            pageYPosition > 60
              ? "#ef4444"
              : classForMenuToggle === "show-navbar-toggle"
              ? "#ef4444"
              : "rgba(0,0,0,0)",
          transition: "all ease 1s",
        }}
      >
        <div className="flex justify-between items-center w-full h-full px-4 text-blue-100">
          <div className="flex">
            <div className="p-1">
              <h1 className="text-red-500 cursor-default">Portfolio / </h1>
            </div>
            <div className="p-1">
              <h1 className="text-gray-100 font-mono">Görkem Buğra Saraç</h1>
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center w-10 h-10 mr-4 md:hidden block cursor-pointer border border-1 border-gray-600 p-2"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <div
              className={`menu-line ${
                classForMenuToggle === "show-navbar-toggle"
                  ? "show-menu-line-1"
                  : "menu-line-1"
              }`}
            ></div>
            <div
              className={`menu-line ${
                classForMenuToggle === "show-navbar-toggle"
                  ? "show-menu-line-2"
                  : "menu-line-2"
              }`}
            ></div>
            <div
              className={`menu-line ${
                classForMenuToggle === "show-navbar-toggle"
                  ? "show-menu-line-3"
                  : "menu-line-3"
              }`}
            ></div>
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:h-full">
            <div className="mx-8">
              <h4
                className="cursor-pointer"
                onClick={(e) => {
                  handleClick(e, "about");
                }}
              >
                About
              </h4>
            </div>
            <div className="mx-8">
              <h4
                className="cursor-pointer"
                onClick={(e) => {
                  handleClick(e, "projects");
                }}
              >
                Projects
              </h4>
            </div>
            <div className="mx-8">
              <h4
                className="cursor-pointer"
                onClick={(e) => {
                  handleClick(e, "contacts");
                }}
              >
                Contacts
              </h4>
            </div>

            {/* <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-indigo-900 shadow-sm px-4 py-2 bg-indigo-600 text-md font-medium text-gray-100 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
                      Seçenekler
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 border border-1 border-solid border-gray-100 focus:outline-none">
                      <div className="py-0">
                        <Menu.Item>
                          <p
                            href="#"
                            className="bg-gray-800 text-gray-100 block px-4 py-4 text-sm cursor-default text-right border-b-2 border-gray-500"
                          ></p>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
          </div>
        </div>
      </nav>
      <div
        className={`flex w-full justify-end ${
          classForMenuToggle === "hide-navbar-toggle hidden-navbar-toggle"
            ? "hidden"
            : ""
        } md:hidden p-0 fixed h-screen`}
        style={{
          zIndex: 50,
          top: pageYPosition > 60 ? 0 : 60,
          background: "rgba(0, 0, 0, 0.1)",
          transition: "all ease 1s",
        }}
      >
        <div
          className={`flex flex-col justify-around items-center md:hidden ${classForMenuToggle} mt-16 p-8 absolute bg-gray-900 text-gray-100 h-2/3 rounded-bl-3xl`}
          style={{
            borderLeft: "2px",
            borderBottom: "2px",
            borderStyle: "solid",
            borderColor: "#ef4444",
            zIndex: 50,
          }}
        >
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-1" : ""
            }`}
          >
            <h4
              className="cursor-pointer"
              onClick={(e) => {
                handleClick(e, "about");
                toggleNavbar();
              }}
            >
              About
            </h4>
          </div>
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-2" : ""
            }`}
          >
            <h4
              className="cursor-pointer"
              onClick={(e) => {
                handleClick(e, "projects");
                toggleNavbar();
              }}
            >
              Projects
            </h4>
          </div>
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-3" : ""
            }`}
          >
            <h4
              className="cursor-pointer"
              onClick={(e) => {
                handleClick(e, "contacts");
                toggleNavbar();
              }}
            >
              Contacts
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSide;
