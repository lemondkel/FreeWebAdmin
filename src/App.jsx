import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/layout/Header';
import LeftMenu from './components/layout/LeftMenu';
import Contents from './components/layout/Contents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <LeftMenu />
        <Contents defaultMenu="Cleanings" />
      </div>
    );
  }
}

export default App;
