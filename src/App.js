import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
