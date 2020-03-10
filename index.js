import 'react-app-polyfill/ie11';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './Users/Users';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'CSS Grid'
    };
  }

  render() {
    return (
      <div>
        <h1>{ this.state.name }</h1>
        <Users />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
