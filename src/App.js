import React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Joe",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p>Hi {this.state.name}.</p>
          <button>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
