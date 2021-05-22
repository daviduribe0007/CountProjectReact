import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        Hi
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}

class FirstComponent   extends Component {
  render() {
    return (
      <div className="firstComponent">
        First component
      </div>
    );
  }
}


function SecondComponent(){
  return (
    <div className="firstComponent">
      second component like a function
    </div>
  );
}

export default App;  