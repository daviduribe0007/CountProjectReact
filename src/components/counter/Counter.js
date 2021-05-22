import React, { Component } from 'react';
import './Counter.css';
export default function Counter() {
  return (
    <div className="counter">
      <td class="tableOperations">
        <tr>
          <button class="incrementMount">+1</button>
          <button class="decrementMount">-1</button>
        </tr>
        <tr>
          <span class="resoult"> ff</span>
        </tr>
      </td>
    </div>
  );
}

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