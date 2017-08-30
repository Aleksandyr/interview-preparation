import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Routes from './components/common/routes/Routes'
import Header from './components/Header'
import About from './components/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Routes />
      </div>
    );
  }
}

export default App;
