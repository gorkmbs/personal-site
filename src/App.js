import "./App.css";
import { useEffect, useState } from "react";
import NavbarSide from "./components/NavbarSide";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
const axios = require("axios");

// const urlServer = "http://localhost:5000";
const urlServer = "https://tamzirtapoz.herokuapp.com";

function App() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageYPosition, setPageYPosition] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  // Heroku servers need a hello to start the server. Free plans automatically stop server after 30min no activity.
  // true for implementation, false for deploy
  const [saidHelloBackend, setSaidHelloBackend] = useState(true);

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
      <NavbarSide openMenu={openMenu} setOpenMenu={setOpenMenu} />
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
