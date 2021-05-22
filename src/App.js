import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ( //ths is JSX
      <div className="App">
        Hi
        <FirstComponent />
        <SecondComponent />
      </div>
      /*     // this javaScript 
      return (React.createElement("div", {
        className: "App"
        }, 
          "Hi",
          React.createElement(FirstComponent, null),
          React.createElement(SecondComponent, null))      
      );    
      */
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        First component
      </div>
    );
  }
}


function SecondComponent() {
  return (
    <div className="firstComponent">
      second component lika a function
    </div>
  );
}

export default App;