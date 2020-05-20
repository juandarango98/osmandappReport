import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ConnectualEventivity from "./Components/ConnectualEventivity";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" render={() => <Home />} />

          <Route path="/home" render={() => <Home />} />
          <Route
            path="/eventual-connectivity"
            render={() => <ConnectualEventivity />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
