import React, { Component } from 'react'
import NavItems from '../common/navbar/NavItems'

class Navbar extends Component {
  constructor (props) {
    super (props)

    this.state = {
      icon: {
        firstIconClass: 'icon-user',
        secondIconClass: 'icon-file',
        thirdIconClass: 'icon-briefcase',
        fourthIconClass: 'icon-envelope',
      },
      navitem: {
        firstNavItemHref: "#about",
        secondNavItemHref: "#resume",
        thirdNavItemHref: "#work",
        fourthNavItemHref: "#contact",

        firstNavItemTitle: "About",
        secondNavItemTitle: "Resume",
        thirdNavItemTitle: "Work",
        fourthNavItemTitle: "Contact",
      }
    }
  }
  render () {
      return (
        <div id="section-topbar">
          <div id="topbar-inner">
            <div className="container">
              <div className="row">
                <div className="dropdown">
                  <NavItems navitem={this.state.navitem} icon={this.state.icon} />
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