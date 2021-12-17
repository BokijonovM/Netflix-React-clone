import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <TvShows />
      </header>
    </div>
  );
}

export default App;
