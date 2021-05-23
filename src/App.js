import React, { Component } from 'react';
import './App.css';
import ThirdComponent, { FourthComponent } from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LearningdComponents/>
        <Counter by={1}/>
        <Counter />
        <Counter by={5}/>
        <Counter by={100}/>
        

      </div>
    );
  }
}

class LearningdComponents extends Component {
  render() {
    return ( //this is JSX
      <div className="LearnComponents">
        Hi
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
      /*     // this javaScript and lab
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
    <div className="secondComponent">
      second component lika a function
    </div>
  );
}

export default App;