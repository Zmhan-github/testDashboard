import React, { Component } from 'react';

import './index.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="item">
          <div className="item-element"> Home Page </div>
        </div>
        <div className="item">
          <div className="item-element">1</div>
          <div className="item-element">2</div>
          <div className="item-element">3</div> 
          <div className="item-element">4</div>
        </div>
        <div className="item">
          <div className="item-element">1</div>
          <div className="item-element">2</div>
        </div>      
      </div> 
    );
  }
};
