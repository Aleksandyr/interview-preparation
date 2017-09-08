import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import CategoryNavbar from './components/CategoryNavbar'
import InterviewQuestion from './components/questions/InterviewQuestion'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Header />
        <About />
        <CategoryNavbar />
        <InterviewQuestion />
      </div>
    )
  }
}

export default App
