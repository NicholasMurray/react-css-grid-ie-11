import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Users',
      users: []
    };
  }

  URL = 'https://randomuser.me/api/?results=10';
  gridTemplateCols = 3;

  componentDidMount() {
    fetch(this.URL)
    .then(response => response.json())
    .then(data => this.setState({ users: data.results }));
  }

  getGridColumnNum(index) {
    return ((index % this.gridTemplateCols) + 1);
  }

  getGridRowNum(index) {
    return Math.floor(((index) + this.gridTemplateCols) / this.gridTemplateCols);
  }

  render() {
    return (
      <div>
        <p>
          I.E. 11 compatible Cross-browser Dynamic CSS Grid using grid-template-columns and a grid columns and grid rows fallback
        </p>
        <ul style={{
            gridTemplateColumns: 'repeat(' + this.gridTemplateCols + ', 1fr)',
            msGridColumns: '(1fr)[' + this.gridTemplateCols + ']'
        }}>
          {this.state.users.map((el, i) => (
            <li style={{
              fontWeight: 'bold',
              msGridColumn: this.getGridColumnNum(i),
              msGridRow: this.getGridRowNum(i)
            }}>
              {el.name.first}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}