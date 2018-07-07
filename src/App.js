import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moon from './moon.png'

class App extends Component {
  render() {
    return (
        <div class="resize-container">
          <img src={moon} class="resize-drag"/>
        </div>
    );
  }
}

export default App;
