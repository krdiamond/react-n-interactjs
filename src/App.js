import React, { Component } from 'react';
import moon from './moon.png'
import rock from './rock.png'


class App extends Component {
  render() {
    return (
      <div>
        <img src={moon} class="moon" alt="moon"/>
        <img src={rock} class="rock" alt="rock" height="150px"/>
      </div>
    );
  }
}

export default App;
