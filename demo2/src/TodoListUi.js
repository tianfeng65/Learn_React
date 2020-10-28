import React from 'react';
import {Input, Button, List} from 'antd'

const TodoListUI = (props) => {
    return ( 
        <div style={{margin: '10px', width: '300px'}}>
            <div style={{marginBottom: '20px'}}>
                <Input 
                    placeholder='请输入。。。' 
                    value={props.inputValue}
                    style={{width: '150px', marginRight: '10px'}}
                    onChange={props.handleInputChange}
                ></Input>
                <Button 
                    type='primary'
                    onClick={props.handleAddClick}
                >增加</Button>
            </div>
            <div>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => 
                        <List.Item 
                            onClick={() => {props.handleItemClick(index)}}>{index+1}-{item}
                        </List.Item>
                    }
                ></List>    
            </div>
        </div>
        );
}
 
export default TodoListUI;