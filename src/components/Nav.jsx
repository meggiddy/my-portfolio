import React from "react";
import Line from "./Line";

function NavBar() {
  return (
    <>
      <div className="flex flex-row items-center justify-between h-20">
        <div className="flex pl-3">
          <img src="/4.png" alt="LOGO" style={{ maxWidth: "20%" }} />
          <p className="flex items-center">FRONTEND AND MOBILE DEVELOPER</p>
        </div>
        <div className="flex flex-row">
          <p className="pr-3">works</p>
          <p className="pr-3">about</p>
          <p className="pr-3">contact</p>
        </div>
      </div>
      <Line />
    </>
  );
}

export default NavBar;
