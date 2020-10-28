import React, { Component } from 'react';
import store from './redux/store'
import TodoListUI from './TodoListUi'
import {changeInputAction, addItemAction, removeItemAction, fetchList} from './redux/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddClick = this.handleAddClick.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange() {
        this.setState(store.getState())
    }
    componentDidMount() {
        const action = fetchList()
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleAddClick={this.handleAddClick}
                handleItemClick={this.handleItemClick}
            ></TodoListUI>
             
        )
    }
    handleInputChange(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    handleAddClick(){
        if(this.state.inputValue){
            const action = addItemAction()
            store.dispatch(action)
        }
    }
    handleItemClick(index){
        const action = removeItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList