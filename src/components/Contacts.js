import React from "react";

const Contacts = ({ pageWidth, pageYPosition, navbarSpace }) => {
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
      <div className="d-flex m-0 p-0 justify-content-around flex-wrap align-items-center">
        hellos
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default Contacts;
