import {createStore} from 'redux';
import reducer from './reducer'
//返回传给createStore的值
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store; 
