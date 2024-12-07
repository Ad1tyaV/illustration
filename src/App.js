import "./App.css";
import TitleBar from "./components/TitleBar";
import MainContent from "./components/MainContent";
import BottomBar from "./components/BottomBar";
import { ChapterProvider } from "./context/ChapterContext";
import { StoriesContext, StoriesProvider } from "./context/StoriesContext";
import MainMenu from "./components/MainMenu";
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <StoriesProvider>
        <ChapterProvider>
          <TitleBar />
          <AbstractComponent />
          <BottomBar />
        </ChapterProvider>
      </StoriesProvider>
    </div>
  );
}

const AbstractComponent = () => {
  const { story } = useContext(StoriesContext);
  return story ? <MainContent /> : <MainMenu />;
};

// npx prettier --write "src/**/*.jsx"

export default App;
