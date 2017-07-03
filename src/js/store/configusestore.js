/* 
* @Author: anchen
* @Date:   2017-07-03 14:52:12
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-03 15:13:12
*/
// 创建store 固定写法
import { creatStore } from "redux";
// 引入 reducers  不写具体 默认 index.js
import rootReducer from "../reducers";

export default function configusestore(initialState){
    const store = creatStore(rootReducer,initialState,
        // 触发 redux-devtools 调试工具
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store;
}