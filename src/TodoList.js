import React,{ Component} from 'react'
import 'antd/dist/antd.css';

import store from './store'
import {getInputChangeAction,getaddtodoAction,getdeletetodoAction} from './store/actionCreator'
import TodolistUI from './TodolistUI'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStoreChange);
     
    }


    render(){
        return <TodolistUI inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
        list={this.state.list}
        />



    }
    handleInputChange(e){
        const action =getInputChangeAction(e.target.value)
        console.log(action)
        store.dispatch(action)
    }
    handleStoreChange(){
        console.log(store.getState())
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action =getaddtodoAction();
        store.dispatch(action);
    }
    handleDeleteItem(index){
        const action=getdeletetodoAction(index);
        store.dispatch(action)

    }
}
export default TodoList;