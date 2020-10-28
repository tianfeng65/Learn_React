import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    shouldComponentUpdate(nextProps) {
        if(nextProps.content !== this.props.content) {
            return true
        }
        return false
    }

    render() { 
        return ( 
        <li onClick={this.handleClick}>{this.props.content}-{this.props.name}</li>
         );
    }

    handleClick() {
        this.props.handleRemove(this.props.index)
    }
}
 
Item.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    handleRemove: PropTypes.func,
    name: PropTypes.string.isRequired
}

Item.defaultProps = {
    name: '😁'
}

export default Item;