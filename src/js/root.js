import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
// index
import Index from "./components/pc_index";
import Mobile from "./components/mobile_index.js"
// css
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// 响应式插件
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
    render(){
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Index />
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <Mobile />
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(
    <Root/>, 
    document.getElementById('mainContainer')
);
