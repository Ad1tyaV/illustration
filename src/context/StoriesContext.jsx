import React, { createContext, useState } from "react";
import { Stories } from "../utils/Stories";

export const StoriesContext = createContext(Stories.RAMAYANA);

export const StoriesProvider = ({ children }) => {
  // const [story, setStory] = useState(Stories.RAMAYANA);
  const [story, setStory] = useState(null);

  return (
    <StoriesContext.Provider value={{ story, setStory }}>
      {children}
    </StoriesContext.Provider>
  );
};
