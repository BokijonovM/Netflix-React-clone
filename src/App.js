import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import NavBar from './component/Navbar';
import TvShows from './component/TvShows'
import Section from './components/Section'


function App() {
  return (
    <div className="App">
      <NavBar />

      <TvShows />
      <Section title="Harry Potter"></Section>
      <Section title="Marvel"></Section>
      <Section title="Lord of the Rings"></Section>
      <Section title="Horror"></Section>
      <MyFooter style={{ margin: '0px', padding: "0px" }} />

    </div>
  );
}

export default App;
