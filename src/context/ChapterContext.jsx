import React, { createContext, useState } from "react";

export const ChapterContext = createContext(1);

export const ChapterProvider = ({ children }) => {
  const [chapter, setChapter] = useState(1);

  return (
    <ChapterContext.Provider value={{ chapter, setChapter }}>
      {children}
    </ChapterContext.Provider>
  );
};
