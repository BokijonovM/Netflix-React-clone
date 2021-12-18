import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';
import TvShows from './component/TvShows'
import Section from './components/Section'

function App() {
  return (
    <div className="App bg-dark">
      <NavBar />
        
        <TvShows />
        <Section title="Harry Potter"></Section>
        <Section title="Lord of the Rings"></Section>
        <Section title="Horror"></Section>
        <Section title="Action"></Section>
      

    </div>
  );
}

export default App;
