import React, { Component } from 'react'
import NavItems from './common/navbar/NavItems'

class Navbar extends Component {
  constructor (props) {
    super (props)

    this.state = {
      iconClasses: [
        { iconClass: 'icon-user' },
        { iconClass: 'icon-file' },
        { iconClass: 'icon-briefcase' },
        { iconClass: 'icon-envelope' },
      ],
      navitemHrefs:[
        { navItemHref: '#about' },
        { navItemHref: '#resume' },
        { navItemHref: '#work' },
        { navItemHref: '#contact' },
      ],
      navitemTitles: [
        { navitemTitle: 'About' },
        { navitemTitle: 'Resume' },
        { navitemTitle: 'Work' },
        { navitemTitle: 'Contact' },
      ]
    }
  }

  render () {
      return (
        <div id="section-topbar">
          <div id="topbar-inner">
            <div className="container">
              <div className="row">
                <div className="dropdown">
                  <NavItems navitemHrefs={this.state.navitemHrefs} navitemTitles={this.state.navitemTitles} iconClasses={this.state.iconClasses} />
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