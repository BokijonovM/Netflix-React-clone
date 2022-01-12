import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
import TvShows from "./components/TvShows";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <TvShows title="TV Shows" />
      </header>
    </div>
=======

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import DisplayMovies from "./components/DisplayMovies";
import Section from "./components/Section";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/display" element={<DisplayMovies />} />

          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<Section title="Shows"></Section>} />

          <Route path="*" element={<h1> 404 NOT FOUND</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
