/* 
* @Author: anchen
* @Date:   2017-07-03 14:39:13
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-07 14:08:04
*/
// 调用结合
import {combineReducers} from "redux";
// 引入其中一个reducers
import userinfo from "./headnav.js";
// 结合
const rootReducer = combineReducers({
    userinfo
})
// 暴露出去
export default rootReducer