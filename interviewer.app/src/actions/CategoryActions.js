import dispatcher from '../dispatcher'

const CategoryActions = {
  types: {
    QUESTIONS_BY_CATEGORY: 'questions_by_category',
    ALL_CATEGORIES: 'all_categories'
  },
  allCategories () {
    dispatcher.dispatch({
      type: this.types.ALL_CATEGORIES
    })
  },
  questionsByCategory (category) {
    dispatcher.dispatch({
      type: this.types.QUESTIONS_BY_CATEGORY,
      category
    })
  }
}

export default CategoryActions
