class FormHelpers {
  static handleFormChange (event, stateField) {
    const target = event.target
    const field = target.name
    const value = target.value

    let state = this.state[stateField]
    typeof (state) === 'object'
      ? state[field] = value
      : state = value

    this.setState({ [stateField]: state })
  }
}

export default FormHelpers
