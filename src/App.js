import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
