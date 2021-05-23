import React, { Component } from 'react';

export default class ThirdComponent extends Component {
    render() {
      return (
        <div className="thirdComponent">
          Third component from a module
        </div>
      );
    }
  }


 export function  FourthComponent() {
    return (
      <div className="fourthComponent">
      Fourth function component form a module
      </div>
    );
  }