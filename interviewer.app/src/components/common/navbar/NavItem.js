import React, { Component } from 'react'
import Icon from './Icon'
import AnchorLink from '../form/AnchorLink'

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
        <AnchorLink className='smoothScroll' {...this.props} onClickMethod={this.props.onClickMethod} content={renderedElement} />
      </div>
    )
  }
}

export default NavItem
