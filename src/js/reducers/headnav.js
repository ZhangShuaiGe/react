/* 
* @Author: anchen
* @Date:   2017-07-03 14:39:13
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-07 14:07:45
*/
// 引入常量字段
import * as actionTypes from "../constants/userinfo.js";

// 初始化state
const initialState = {};

export default function headnav(state = initialState,action){

    switch (action.type){

        case actionTypes.USERCLICK_HEADNAV :
            return action.data

        default:
            return state
            
    }

}