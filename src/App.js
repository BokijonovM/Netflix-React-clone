import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
