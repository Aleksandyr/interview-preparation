import React, {Component} from 'react'
import NavItems from './common/navbar/NavItems'

class CategoryNavbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navItemTexts: [
        { navItemText: 'C#' },
        { navItemText: 'Javascript' },
        { navItemText: 'Java' }
      ],
      navitemHrefs: [
        { navItemHref: '#C#' },
        { navItemHref: '#Javascript' },
        { navItemHref: '#Java' }
      ],
      navitemTitles: [
        { navitemTitle: 'C#' },
        { navitemTitle: 'Javascript' },
        { navitemTitle: 'Java' }
      ]
    }
  }

  render () {
    return (
      <div id='category-bar'>
        <div id='topbar-inner'>
          <div className='container'>
            <div className='row'>
              <div className='dropdown'>
                <NavItems navitemHrefs={this.state.navitemHrefs} navitemTitles={this.state.navitemTitles} navItemTexts={this.state.navItemTexts} />
              </div>
              <div className='clear' />
            </div>
          </div>
          <div className='clear' />
        </div>
      </div>
    )
  }
}

export default CategoryNavbar
