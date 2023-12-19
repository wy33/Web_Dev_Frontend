import Navbar from './components/Navbar.js';
import MainAnime from "./components/Anime.js";
import MainManga from "./components/Manga.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/anime" element={<MainAnime />}/>
            <Route exact path="/manga" element={<MainManga />}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;


