import React, { Component } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About'
import CategoryNavbar from '../CategoryNavbar'
import InterviewQuestion from '../questions/InterviewQuestion'

class HomePage extends Component {
  render () {
    console.log(this.props.history)
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <CategoryNavbar />
        <InterviewQuestion history={this.props.history} />
      </div>
    )
  }
}

export default HomePage
