/* 
* @Author: anchen
* @Date:   2017-07-07 10:56:41
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-07 11:44:12
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from "./store/configusestore.js";
// 创建 Redux 的 store 对象
const store = configureStore();
import Route from './route/root.js';

render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById('mainContainer')
)