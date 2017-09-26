import React, {Component} from 'react'
import NavItems from './common/navbar/NavItems'
import CategoryAction from '../actions/CategoryActions'
import CategoryStore from '../stores/CategoryStore'

class CategoryNavbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: [],
      navItemTexts: [
        { navItemText: 'CSharp' },
        { navItemText: 'Javascript' },
        { navItemText: 'Java' }
      ],
      navitemHrefs: [
        { navItemHref: '#CSharp' },
        { navItemHref: '#Javascript' },
        { navItemHref: '#Java' }
      ],
      navitemTitles: [
        { navitemTitle: 'CSharp' },
        { navitemTitle: 'Javascript' },
        { navitemTitle: 'Java' }
      ]
    }

    this.handleFetchedQuestions = this.handleFetchedQuestions.bind(this)

    CategoryStore.on(
      CategoryStore.eventTypes.FETCHED_ALL_CATEGORIES,
      this.handleFetchedQuestions
    )
  }

  componentWillMount () {
    CategoryAction.allCategories()
  }

  handleFetchedQuestions (data) {
    this.setState({categories: data.categories})
  }

  handleCategoryClick (event) {
    CategoryStore.questionsByCategory(event.target.textContent.toLocaleLowerCase())
  }

  render () {
    return (
      <div id='category-bar'>
        <div id='topbar-inner'>
          <div className='container'>
            <div className='row'>
              <div className='dropdown'>
                <NavItems navitemHrefs={this.state.navitemHrefs} onClickMethod={this.handleCategoryClick.bind(this)} navitemTitles={this.state.navitemTitles} navItemTexts={this.state.navItemTexts} />
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
