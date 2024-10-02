import React from "react";

const Backdrop = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        background: "rgba(0,0,0,0.5)",
        zIndex: 998,
      }}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Backdrop;
