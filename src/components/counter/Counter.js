import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  //Define ethe inicial state in a constructor
  //state-> counter 0
  constructor() {
    super();// you need call this super method
    this.state = {
      counter: 0
    }
    this.incrementOne = this.incrementOne.bind(this); 
    this.decrementOne = this.decrementOne.bind(this); // bind the method incrementMount
  }
  render() {
    return (
      <div className="counter">
        <td class="tableOperations">
          <tr>
            <button class="incrementButton" onClick={this.incrementOne}>+1</button>
            <button class="decrementButton"onClick={this.decrementOne}>-1</button>
          </tr>
          <tr>
            <span class="resoult"> {this.state.counter}</span>
          </tr>
        </td>
      </div>
    );
  }
  incrementOne() {
    //console.log('ingffff');
    this.setState({
      counter: this.state.counter += 1
    });
  
  }
  decrementOne() {   
    this.setState({
      counter: this.state.counter -= 1
    });
  
  }

}

export default Counter;

/*or you can use only one fuction and export like this->
function  Counter() {
  return (
    <div className="counter">
    this is the counter
    </div>
  );
}
export default Counter //this is importan to import only a function
*/