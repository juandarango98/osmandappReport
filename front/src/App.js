import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Design from "./Components/Design";
import Nav from "./Nav.js";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ConnectualEventivity from "./Components/ConnectualEventivity";
import Usability from "./Components/Usability";
import Issues from "./Components/Issues";
import Imports from "./Components/Imports";
import Performance from "./Components/Performance";

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

          <Route path="/design" component={Design} />

          <Route path="/issues" component={Issues} />
          <Route path="/imports" component={Imports} />
          <Route path="/performance" component={Performance} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
