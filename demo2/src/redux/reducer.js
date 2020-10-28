import {CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, FETCH_LIST} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type === CHANGE_INPUT) {
        newState.inputValue = action.value
    }
    if(action.type === ADD_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
    }
    if(action.type === REMOVE_ITEM) {
        newState.list.splice(action.value, 1)
    }
    if(action.type === FETCH_LIST) {
        newState.list = action.value
    }
    return newState
}