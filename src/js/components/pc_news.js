/* 
* @Author: anchen
* @Date:   2017-06-07 18:15:26
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-08 13:15:17
*/
import React from "react";
import Head from "./pc_header";
import NewsImg from "./pc_news_image_block";
import {Row, Col} from 'antd';
// 连接了Redux和React
import { connect } from 'react-redux';
// 绑定 bindActionCreators 绑定action 创建 store
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../actions/userinfo';

class news extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log("1reduser",this.props.userifo);
        console.log("1action",this.props.userinfoActions);
        return(
            <div>
                <Head reduser={this.props.userifo} actions={this.props.userinfoActions}/>
                <div>
                    <Row style={{marginTop:"20px",fontSize:"20px"}}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            当前位置：{this.props.userifo.type}
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                    <Row>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <NewsImg liwidth={"132px"} width={"100%"} title={this.props.userifo.type} actions={this.props.userinfoActions} count={10} type={this.props.userifo.type}/>
                        </Col>
                        <Col span={3}></Col>
                    </Row>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        userifo: state.userinfo
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
)(news)
