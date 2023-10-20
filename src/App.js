import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Paris" />
        <footer>
          This project was coded by{" "}
          <a href="https://funny-clafoutis-782363.netlify.app/" target="_blank">
            Reka Acs
          </a>{" "}
          and is {""}
          <a href="https://github.com/RekaMel/weather-react" target="_blank">
            open sourced on GitHub.
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
