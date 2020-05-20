import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";

import Nav from "./Nav.js";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ConnectualEventivity from "./Components/ConnectualEventivity";
import Usability from "./Components/Usability";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/ec" component={ConnectualEventivity} />
          <Route path="/usability" component={Usability} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
