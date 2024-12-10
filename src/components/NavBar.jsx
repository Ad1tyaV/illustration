import React, { useState, useContext, useEffect } from "react";
import SkipNext from "@mui/icons-material/SkipNext";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import CancelIcon from "@mui/icons-material/Cancel";
import "./styles/navbar.css";
import { ChapterContext } from "../context/ChapterContext";
import { StoriesContext } from "../context/StoriesContext";
import { getChapters } from "../utils/Stories";

export const NavBar = () => {
  const { chapter, setChapter } = useContext(ChapterContext);
  const { story, setStory } = useContext(StoriesContext);
  const [maxChapters, setMaxChapters] = useState(0);

  useEffect(() => {
    if (story) {
      const chapters = getChapters(story);
      console.log("Story=", story);
      console.log("Chapters=", chapters);
      setMaxChapters(chapters);
    }
  }, [story]);

  return (
    <div className="navbar">
      <div
        className="nav-buttons"
        onClick={() => {
          setChapter(chapter - 1);
        }}
        style={{
          visibility: story ? (chapter === 1 ? "hidden" : "visible") : "hidden",
        }}
      >
        <SkipPrevious />
      </div>
      <div
        className="nav-buttons"
        onClick={() => {
          setStory(null);
          setChapter(1);
        }}
        style={{ visibility: story ? "visible" : "hidden" }}
      >
        <CancelIcon />
      </div>
      <div
        className="nav-buttons"
        onClick={() => {
          setChapter(chapter + 1);
        }}
        style={{
          visibility: story
            ? chapter === maxChapters
              ? "hidden"
              : "visible"
            : "hidden",
        }}
      >
        <SkipNext />
      </div>
    </div>
  );
};
