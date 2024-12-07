import React, { useContext, useEffect } from "react";
import "./styles/main_content.css";
import { ChapterContext } from "../context/ChapterContext";
import ImageContainer from "./ImageContainer";

function MainContentV2() {
  const { chapter } = useContext(ChapterContext);
  const data = require(`./static_data/responses/${chapter}.json`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapter]);

  return (
    <div className="mc-container">
      <h3 className="chapter">{`${chapter}. ${data.title}`}</h3>
      <div className="content">
        {data.content && (
          <ul>
            {data.content.map((para) => (
              <li>{para}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="imageGrid">
        {data.images &&
          data.images.map((imageObject) => (
            <ImageContainer
              image={imageObject.image}
              description={imageObject.description}
            />
          ))}
      </div>
      <div className="facts">
        {data.funfacts && (
          <>
            <center>
              <h3>Funfacts</h3>
            </center>
            <ul>
              {data.funfacts.map((fact, index) => (
                <li key={index} className="funfact">
                  {fact}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default MainContent;
