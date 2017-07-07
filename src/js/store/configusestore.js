/* 
* @Author: anchen
* @Date:   2017-07-03 14:52:12
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-07 09:37:31
*/
// 创建store 固定写法
import { createStore } from 'redux';
// 引入 reducers  不写具体 默认 index.js
import rootReducer from "../reducers/index.js";

export default function configusestore(initialState){
    const store = createStore(rootReducer,initialState);
    return store;
}