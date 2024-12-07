import './App.css';
import TitleBar from './components/TitleBar';
import MainContent from './components/MainContent';
import BottomBar from './components/BottomBar';
import data from './components/static_data/responses/1.json'
import { ChapterProvider } from './context/ChapterContext';

function App() {
  return (
    <div className="App">
      <ChapterProvider>
        <TitleBar/>
        <MainContent data={data}/>      
        <BottomBar/>
      </ChapterProvider>
    </div>
  );
}

// npx prettier --write "src/**/*.jsx"

export default App;
