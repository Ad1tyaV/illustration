import React, { useContext } from "react";
import { Stories } from "../utils/Stories";
import { Button } from "@mui/material";
import { StoriesContext } from "../context/StoriesContext";

function MainMenu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Object.keys(Stories).map((story) => (
        <MenuItem title={story} />
      ))}
      <MenuItem />
    </div>
  );
}

const MenuItem = (props) => {
  const title = props.title;
  const { setStory } = useContext(StoriesContext);
  return (
    title && (
      <div style={{ paddingBottom: "2%" }}>
        <Button variant="contained" onClick={() => setStory(title)}>
          {title}
        </Button>
      </div>
    )
  );
};

export default MainMenu;
