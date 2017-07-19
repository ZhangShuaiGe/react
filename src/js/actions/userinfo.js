// import * as constants from "../constants/userinfo.js";
// 定义点击
export const USERINFO_LOGIN = 'USERINFO_LOGIN';
export const UPDATE_CITYNAME = 'UPDATE_CITYNAME';

export function head(data){
    return {
        type:"HEAD",
        data
    }
}

export function news(data){
    return {
        type:"NEWS",
        data
    }
}