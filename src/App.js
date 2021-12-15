import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  countCharter = (e) => {
    //e.persist()
    this.setState({ count: e.target.value.length })
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={(e) => this.countCharter(e)}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
