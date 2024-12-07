import React, { useContext, useEffect } from "react";
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
  let maxChapters = 0;

  useEffect(() => {
    maxChapters = getChapters(story);
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
            ? chapter === 14
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
