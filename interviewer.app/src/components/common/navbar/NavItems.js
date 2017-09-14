import React, {Component} from 'react'
import NavItem from './NavItem'

class NavItems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      iconClasses: props.iconClasses,
      navItemTexts: props.navItemTexts,
      navitemHrefs: props.navitemHrefs,
      navitemTitles: props.navitemTitles
    }
  }
  render () {
    let navitemElements = 'There is no navitem elements!'
    if (this.state.navitemHrefs.length > 0 && this.state.iconClasses) {
      navitemElements = this.state.navitemHrefs.map((element, index) => (
        <li className='menu-item' key={index}>
          <NavItem
            href={this.state.navitemHrefs[index].navItemHref}
            title={this.state.navitemTitles[index].navitemTitle}
            iconClassName={this.state.iconClasses[index].iconClass} />
        </li>
      ))
    } else {
      navitemElements = this.state.navitemHrefs.map((element, index) => (
        <li className='menu-item' key={index}>
          <NavItem
            href={this.state.navitemHrefs[index].navItemHref}
            title={this.state.navitemTitles[index].navitemTitle}
            navItemText={this.state.navItemTexts[index].navItemText} />
        </li>
      ))
    }
    return (
      <ul id='nav' className='nav'>
        {navitemElements}
      </ul>
    )
  }
}

export default NavItems
