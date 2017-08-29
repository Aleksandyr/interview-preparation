import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
          <div id="section-topbar">
            <div id="topbar-inner">
              <div className="container">
                <div className="row">
                  <div className="dropdown">
                    <ul id="nav" className="nav">
                      <li className="menu-item">
                        <a className="smoothScroll" href="#about" title="About"><i className="icon-user"></i></a>
                      </li>
                      <li className="menu-item">
                        <a className="smoothScroll" href="#resume" title="Resume"><i className="icon-file"></i></a>
                      </li>
                      <li className="menu-item">
                        <a className="smoothScroll" href="#work" title="Works"><i className="icon-briefcase"></i>
                      </a></li>
                      <li className="menu-item">
                        <a className="smoothScroll" href="#contact" title="Contact"><i className="icon-envelope"></i></a>
                      </li>
                    </ul>
                  </div>

                  <div className="clear"></div>
                </div>
              </div>

              <div className="clear"></div>
            </div>
          </div>
        )
    }
}

export default Navbar