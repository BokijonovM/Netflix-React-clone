import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';
import TvShows from './component/TvShows.jsx'
function App() {
  return (
    <div className="App bg-dark">
      <NavBar/>
      
        <TvShows />
        
    
    </div>
  );
}

export default App;
