const defaultStore = {
    inputValue:'',
    list:[]
}
//reducer 可以接受state
//纯函数
export default (state=defaultStore,action)=>{
    console.log(state,action)
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type==='add_todo_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type==='delete_todo_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}