import React, { Component } from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import About from '../About'
import CategoryNavbar from '../CategoryNavbar'
import InterviewQuestions from '../questions/InterviewQuestions'

class HomePage extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <CategoryNavbar />
        <InterviewQuestions history={this.props.history} location={this.props.location} />
      </div>
    )
  }
}

export default HomePage
