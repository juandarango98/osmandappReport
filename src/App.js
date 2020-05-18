import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
