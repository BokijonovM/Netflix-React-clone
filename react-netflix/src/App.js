import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  );
}

export default App;
