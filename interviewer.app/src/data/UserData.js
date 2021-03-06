import Data from './Data'

const baseUrl = 'api/account'

class UserData {
  static register (user) {
    return Data.post(`${baseUrl}/sign-up`, user)
  }

  static login (user) {
    return Data.post(`${baseUrl}/sign-in`, user)
  }
}

export default UserData
