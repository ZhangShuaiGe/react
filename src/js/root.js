import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
// index
import Index from "./components/pc_index";
import Mobile from "./components/mobile_index.js";
import Details from "./components/pc_news.details.js";
import MobileDetails from "./components/mobile_news.details.js";
// css
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// 响应式插件
import MediaQuery from 'react-responsive';

// 调用 redux 的 容器  默认写法
import { Provider } from 'react-redux';
// 调用 store
import configureStore from './store/configusestore';

export default class Root extends React.Component{
    // 传进去stroe
    const store = configureStore();

    render(){

        return (
            <Provider store={store}>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" components={Index}></Route>
                        <Route path="/details/:uniquekey" components={Details}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" components={Mobile}></Route>
                        <Route path="/details/:uniquekey" components={MobileDetails}></Route>
                    </Router>
                </MediaQuery>
            </Provider>
        );
        
    };
}

ReactDOM.render(
    <Root/>, 
    document.getElementById('mainContainer')
);
