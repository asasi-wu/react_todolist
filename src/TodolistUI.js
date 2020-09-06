import React, {Component} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
const  TodolistUI=(props)=>{
    return (
<div style={{marginTop:10,marginLeft:10}}>
    <Input
    onChange={props.handleInputChange} 
    value={props.inputValue}
    placeholder="todo info" style={{width:300,marginRight:10}}/>


    <Button type="primary" onClick={props.handleBtnClick}>提交</Button>


    <List
    style={{marginTop:10,width:300}}
    size="small"
    bordered
    dataSource={props.list}
    renderItem={(item,index) => <List.Item 
    onClick={(index)=>{props.handleDeleteItem(index)}}//this 指向
    >{item}</List.Item>}
/>
    </div>

    )
}
/* class TodolistUI extends Component{//无状态组件
render(){
    return(
    <div style={{marginTop:10,marginLeft:10}}>
    <Input
    onChange={this.props.handleInputChange} 
    value={this.props.inputValue}
    placeholder="todo info" style={{width:300,marginRight:10}}/>


    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>


    <List
    style={{marginTop:10,width:300}}
    size="small"
    bordered
    dataSource={this.props.list}
    renderItem={(item,index) => <List.Item 
    onClick={(index)=>{this.props.handleDeleteItem(index)}}//this 指向
    >{item}</List.Item>}
/>
    </div>
    )
    }

} */
export default TodolistUI;