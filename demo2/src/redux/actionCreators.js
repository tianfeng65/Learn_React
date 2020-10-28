import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, FETCH_LIST } from './actionTypes'
import Axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const removeItemAction = (value) => ({
    type: REMOVE_ITEM,
    value
})

export const fetchListAction = value => ({
    type: FETCH_LIST,
    value
})

export const fetchList = () => {
    return (dispatch) => {
        Axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
            .then(res => {
                const action = fetchListAction(res.data.data.list)
                dispatch(action)
            })
            .catch(err => console.log(err))
    }
}