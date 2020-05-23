import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "fixed", top: "0em" }}
    >
      <Link
        to="/home"
        className="navbar-brand nav-link"
        style={{ marginTop: "12px" }}
      >
        AntennaPod Report
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <Link to="/design" className="nav-link">
            <li className="prueba-nav">Design</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/usability" className="nav-link">
            <li className="prueba-nav">Usability</li>
            <span className="sr-only">(current)</span>
          </Link>

          <Link to="/ec" className="nav-link">
            <li className="prueba-nav">Eventual connectivity</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/performance" className="nav-link">
            <li className="prueba-nav">Performance</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/issues" className="nav-link">
            <li className="prueba-nav">Github Issues</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/imports" className="nav-link">
            <li className="prueba-nav">Imports</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
