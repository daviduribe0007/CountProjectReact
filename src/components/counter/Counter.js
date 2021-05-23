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
                   
            
              <span className="resoult">{this.state.counter}</span>
            
          
      </div>
    );
  }
  incrementOne = () => {
    //console.log('ingffff');
    this.setState({
      counter: this.state.counter + this.props.by
    });
  }
  decrementOne = () => {
    this.setState({
      counter: this.state.counter - this.props.by
    });

  }

}
//this is used to asign the defoult values of by or any prop
Counter.defaultProps = {
  by:2
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