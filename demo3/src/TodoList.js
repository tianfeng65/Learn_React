import React from 'react';
import { connect } from 'react-redux'

const TodoList = props => {
  let { inputValue, inputChange, list, submit, deleteItem } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange}></input>
        <button onClick={submit.bind(this)}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => <li key={index + item} onClick={() => deleteItem(index)}>{item}</li>)}
      </ul>
    </div>
  )
}

const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = dispatch => {
  return {
    inputChange(e) {
      let action = {
        type: 'input_change',
        value: e.target.value
      }
      dispatch(action)
    },
    submit() {
      if (this.props.inputValue) {
        let action = {
          type: 'submit'
        }
        dispatch(action)
      }

    },
    deleteItem(index) {
      let action = {
        type: 'delete_item',
        value: index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);