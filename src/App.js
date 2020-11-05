import React from "react";
import { Router } from "./components/Router";
import { BotonRedireccionar } from "./components/BotonRedireccionar";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import "./App.css";
import { fireEvent } from "@testing-library/react";

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
