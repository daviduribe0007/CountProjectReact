import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  constructor() {
    super();// you need call this super method
    this.state = {
      counter: 0
    }
    //this.incrementOne = this.incrementOne.bind(this); // bind the method incrementMount
    //this.decrementOne = this.decrementOne.bind(this); // you dont need bind when use a arrow function 
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton incrementMethod={this.increment}decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment}decrementMethod={this.decrement}/>
        <CounterButton by={100} incrementMethod={this.increment}decrementMethod={this.decrement}/>        
        <span className="resoult">{this.state.counter}</span>
        <div><button className="resetbutton" onClick={this.reset}>RESET</button></div>
      </div>
    );
  }

  increment = (by) => {
    //console.log('ingffff');
    this.setState(
      (prevState) => {
      return {counter: prevState.counter + by}
    });
  }

  reset = () => {
    //console.log('ingffff');
    this.setState(
      (prevState) => {
      return {counter: 0}
    });
  } 

  decrement = (by) => {
    this.setState({
      counter: this.state.counter - by
    });

  }
  
  
}

class CounterButton extends Component {
  //Define ethe inicial state in a constructor
  //state-> counter 0
  constructor() {
    super();// you need call this super method
    this.state = {
      counter: 0
    }
    //this.incrementOne = this.incrementOne.bind(this); // bind the method incrementMount
    //this.decrementOne = this.decrementOne.bind(this); // you dont need bind when use a arrow function 
  }
  render = () => {
    // const style33 = {fontSize :"50px",padding : "15px 30 px"}; // for java script
    //style={style33} // and we you need use this only call the const

    return (
      <div className="counter">
        <button className="incrementButton" onClick={this.incrementOne}>+{this.props.by}</button>
        <button className="decrementButton" onClick={this.decrementOne}>-{this.props.by}</button>
      </div>
    );
  }
  
  incrementOne = () => {
    //console.log('ingffff');
    this.setState({
      counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
  }

  decrementOne = () => {
    this.setState({
      counter: this.state.counter - this.props.by
    });
    this.props.decrementMethod(this.props.by);
  }
}
//this is used to asign the defoult values of by or any prop
CounterButton.defaultProps = {
  by: 2
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
export default Counter //this is importan to export decault counter for the function
*/