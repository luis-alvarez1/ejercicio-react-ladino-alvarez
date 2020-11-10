import React from "react";
import { Router } from "./components/Router";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReactRouter>
        <Router />
      </ReactRouter>
    </div>
  );
}

export default App;
