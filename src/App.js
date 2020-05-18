import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, withRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="osmandappReport/home" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
