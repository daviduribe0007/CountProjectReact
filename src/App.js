import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThirdComponent, { FourthComponent } from './components/learning-examples/ThirdComponent'

class App extends Component {
  render() {
    return ( //ths is JSX
      <div className="App">
        Hi
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent/>
        <FourthComponent/>
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
//class component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        First component
      </div>
    );
  }
}

//function component
function SecondComponent() {
  return (
    <div className="firstComponent">
      second component lika a function
    </div>
  );
}

export default App;