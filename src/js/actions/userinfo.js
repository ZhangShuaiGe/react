// import * as constants from "../constants/userinfo.js";
// 定义点击
export const USERINFO_LOGIN = 'USERINFO_LOGIN';
export const UPDATE_CITYNAME = 'UPDATE_CITYNAME';

export function headnav(data){
    return {
        type:USERINFO_LOGIN,
        data
    }
}

export function nav(data){
    return {
        type:UPDATE_CITYNAME,
        data
    }
}