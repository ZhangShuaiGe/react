import React from "react";
import ReactDom from "react-dom";
import Header from "./pc_header";
import Footer from "./pc_footer";
import Body from "./pc_newscontainer.js";

// 连接了Redux和React
import { connect } from 'react-redux';
// 绑定 bindActionCreators 绑定action 创建 store
import { bindActionCreators } from 'redux';

import * as userinfoActions from '../actions/userinfo';

class Index extends React.Component{
    constructor(){
        super();
    }
    componentWillMount() {
        console.log(1111);
        console.log(this.props.userinfoActions);
        console.log(this.props.userinfoActions.headnav());
        // 模拟登陆
        this.props.userinfoActions.headnav({
            userid: 'abc',
            city: 'beijing'
        })
        console.log(this.props.userinfoActions.headnav);
    }
    render(){
        console.log("Hello.js页面:",this.props.userinfoActions);
        console.log("info:",this.props.headnav);
        console.log("userid:",this.props.headnav.userid);
        return (
            <div>
                111
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state:",state);
    console.log("state.headnav:",state.headnav);
    return {
        headnav: state.headnav
    }
}

// 传入action
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)