const defaultState = {
  inputValue: '不行吧',
  list: []
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'input_change') {
    newState.inputValue = action.value
  }
  if (action.type === 'submit') {
    newState.list = [...newState.list, newState.inputValue]
    newState.inputValue = ''
  }
  if (action.type === 'delete_item') {
    newState.list.splice(action.value, 1)
  }
  return newState
}