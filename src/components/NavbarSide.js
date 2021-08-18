import React from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { FiMenu } from "react-icons/fi";

const NavbarSide = ({
  setClassForMenuToggle,
  classForMenuToggle,
  toggleNavbar,
}) => {
  return (
    <>
      <nav
        className="bg-gray-900 md:h-20 h-16"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100vw",
          borderBottom: "2px",
          borderStyle: "solid",
          borderColor: "#ef4444",
        }}
      >
        <div className="flex justify-between items-center w-full h-full px-4 text-blue-100">
          <div className="flex">
            <div className="p-1">
              <h1 className="text-red-500">Portfolio / </h1>
            </div>
            <div className="p-1">
              <h1 className="text-gray-100 font-mono">Görkem Buğra Saraç</h1>
            </div>
          </div>

          <div
            className="mx-8 md:hidden block cursor-pointer"
            onClick={() => {
              toggleNavbar();
            }}
          >
            <FiMenu />
          </div>
          <div className="hidden md:flex md:justify-center md:items-center md:h-full">
            <div className="mx-8">
              <h4>About</h4>
            </div>
            <div className="mx-8">
              <h4>Projects</h4>
            </div>
            <div className="mx-8">
              <h4>Contacts</h4>
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
        className="flex w-full justify-end md:hidden p-0 fixed h-screen"
        style={{}}
      >
        <div
          className={`flex flex-col justify-around items-center md:hidden ${classForMenuToggle} mt-16 p-8 absolute bg-gray-900 text-gray-100 h-2/3 rounded-bl-3xl`}
          style={{
            borderLeft: "2px",
            borderBottom: "2px",
            borderStyle: "solid",
            borderColor: "#ef4444",
            zIndex: 10,
          }}
        >
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-1" : ""
            }`}
          >
            <h4>About</h4>
          </div>
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-2" : ""
            }`}
          >
            <h4>Projects</h4>
          </div>
          <div
            className={`mx-8 ${
              classForMenuToggle === "show-navbar-toggle" ? "toggle-item-3" : ""
            }`}
          >
            <h4>Contacts</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSide;
