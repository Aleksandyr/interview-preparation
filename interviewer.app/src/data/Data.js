import Auth from '../components/common/user/Auth'

const baseUrl = 'http://localhost:5000/'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

const applyAthorizationHeader = (options, authenticated) => {
  if (authenticated) {
    options.headers.Authorization = `bearer ${Auth.getToken()}`
  }
}

class Data {
  static post (url, data, authenticated) {
    const options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify(data)

    applyAthorizationHeader(options, authenticated)

    return window.fetch(
      `${baseUrl}${url}`,
      options
    ).then(handleJsonResponse)
  }

  static get (url, authenticated) {
    const options = getOptions()
    options.method = 'GET'

    applyAthorizationHeader(options, authenticated)

    return window.fetch(
      `${baseUrl}${url}`,
      options
    ).then(handleJsonResponse)
  }
}

export default Data
