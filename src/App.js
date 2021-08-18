import "./App.css";
import { useEffect, useState } from "react";
import NavbarSide from "./components/NavbarSide";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import nightSky from "./assets/nightSky.jpg";
const axios = require("axios");

// const urlServer = "http://localhost:5000";
const urlServer = "https://tamzirtapoz.herokuapp.com";

function App() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageYPosition, setPageYPosition] = useState(0);
  const [classForMenuToggle, setClassForMenuToggle] = useState(
    "initialize-navbar-toggle"
  );
  // Heroku servers need a hello to start the server. Free plans automatically stop server after 30min no activity.
  // true for implementation, false for deploy
  const [saidHelloBackend, setSaidHelloBackend] = useState(true);

  const hideNavbar = () => {
    if (classForMenuToggle === "hide-navbar-toggle") {
      setClassForMenuToggle("hide-navbar-toggle hidden-navbar-toggle");
    }
  };

  const toggleNavbar = () => {
    if (classForMenuToggle === "show-navbar-toggle") {
      setClassForMenuToggle("hide-navbar-toggle");
      setTimeout(() => {
        hideNavbar();
      }, 950);
    } else {
      setClassForMenuToggle("show-navbar-toggle");
    }
  };

  useEffect(() => {
    if (!saidHelloBackend) {
      axios({
        method: "post",
        url: urlServer + "/users/hello-backend",
        data: { siteName: "Portfolio" },
      })
        .then(() => {
          setSaidHelloBackend(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [saidHelloBackend]);

  const scrolledPage = () => {
    setPageWidth(window.innerWidth);
    setPageYPosition(window.pageYOffset);
  };

  useEffect(() => {
    scrolledPage();
    window.addEventListener("resize", scrolledPage);
    window.addEventListener("scroll", scrolledPage);
    return () => {
      window.removeEventListener("scroll", scrolledPage);
      window.removeEventListener("resize", scrolledPage);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="flex justify-center fixed items-center m-0 p-0 pt-32 pb-8 aboutPageGeneral"
        style={{
          backgroundImage: `url(${nightSky})`,
          height: "100vh",
          width: "100%",
          zIndex: "-1",
        }}
      ></div>
      <NavbarSide
        classForMenuToggle={classForMenuToggle}
        setClassForMenuToggle={setClassForMenuToggle}
        toggleNavbar={toggleNavbar}
      />
      <About
        pageWidth={pageWidth}
        urlServer={urlServer}
        pageYPosition={pageYPosition}
      />
      <Projects
        pageWidth={pageWidth}
        urlServer={urlServer}
        pageYPosition={pageYPosition}
      />
      <Contacts
        urlServer={urlServer}
        pageWidth={pageWidth}
        pageYPosition={pageYPosition}
      />
    </>
  );
}

export default App;
