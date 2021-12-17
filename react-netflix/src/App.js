import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';
import TvShows from './components/TvShows'
import Section from './components/Section'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <TvShows />
        <Section title="Harry Potter"></Section>
        <Section title="Lord of the Rings"></Section>
        <Section title="Horror"></Section>
        <Section title="Action"></Section>
      </header>

    </div>
  );
}

export default App;
