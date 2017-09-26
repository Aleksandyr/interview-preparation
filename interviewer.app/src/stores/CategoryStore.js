import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import CategoryActions from '../actions/CategoryActions'
import CategoryData from '../data/CategoryData'

class CategoryStore extends EventEmitter {
  allCategories () {
    CategoryData
      .allCategories()
      .then(data => this.emit(this.eventTypes.FETCHED_ALL_CATEGORIES, data))
  }
  questionsByCategory (category) {
    CategoryData
      .questionsByCategory(category)
      .then(data => this.emit(this.eventTypes.FETCHED_QUESTIONS_BY_CATEGORY, data))
  }

  handleAction (action) {
    switch (action.type) {
      case CategoryActions.types.QUESTIONS_BY_CATEGORY:
        this.questionsByCategory(action.category)
        break
      case CategoryActions.types.ALL_CATEGORIES:
        this.allCategories()
        break
      default: break
    }
  }
}

let categoryStore = new CategoryStore()

categoryStore.eventTypes = {
  FETCHED_QUESTIONS_BY_CATEGORY: 'fetched_questions_by_category',
  FETCHED_ALL_CATEGORIES: 'fetched_all_questions'
}

dispatcher.register(categoryStore.handleAction.bind(categoryStore))
export default categoryStore
