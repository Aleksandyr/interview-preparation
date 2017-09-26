import Data from './Data'

const baseUrl = 'api/categories'

class CategoryData {
  static allCategories () {
    return Data.get(`${baseUrl}/all`)
  }

  static questionsByCategory (category) {
    return Data.get(`${baseUrl}/questions/?category=${category}`)
  }
}

export default CategoryData
