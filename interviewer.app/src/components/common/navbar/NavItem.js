import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

class NavItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      iconClass: props.iconClassName,
      navItemHref: props.navItemHref,
      navItemTitle: props.navItemTitle,
      navItemText: props.navItemText
    }
  }

  render () {
    let renderedElement = 'text'
    if (this.state.iconClass) {
      renderedElement = <Icon className={this.state.iconClass} />
    } else {
      renderedElement = <p>{this.state.navItemText}</p>
    }

    return (
      <div>
        <Link className='smoothScroll' to={this.state.navItemHref} title={this.state.navItemTitle}>
          { renderedElement }
        </Link>
      </div>
    )
  }
}

export default NavItem
