import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: ''
     }
  }
  render() { 
    return ( <h2>List Page{this.state.id}</h2> );
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.setState({
      id
    })
  }
}
 
export default List;