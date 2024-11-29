import React, { useContext } from "react";
import "./styles/navbar.css";
import { ChapterContext } from "../context/ChapterContext";

export const NavBar = () => {
  const { chapter, setChapter } = useContext(ChapterContext);
  return (
    <div className="navbar">
      <div
        className="nav-buttons"
        onClick={() => {
          setChapter(chapter - 1);
        }}
        style={{ visibility: chapter === 1 ? "hidden" : "visible" }}
      >
        ⏮️
      </div>
      <div
        className="nav-buttons"
        onClick={() => {
          setChapter(chapter + 1);
        }}
        style={{ visibility: chapter === 14 ? "hidden" : "visible" }}
      >
        ⏭️
      </div>
    </div>
  );
};
