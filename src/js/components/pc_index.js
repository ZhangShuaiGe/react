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
    render(){
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
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