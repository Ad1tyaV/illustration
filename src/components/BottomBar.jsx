import React from "react";
import { NavBar } from "./NavBar";

function BottomBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        height: "5%",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavBar />
    </div>
  );
}

export default BottomBar;
