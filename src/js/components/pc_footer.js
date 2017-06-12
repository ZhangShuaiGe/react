/* 
* @Author: anchen
* @Date:   2017-06-06 11:41:12
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-11 16:55:23
*/
import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Card,
    notification
} from 'antd';
export default class footer extends React.Component{
    render(){
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                         &copy;&nbsp;2017 ReactNews 张帅 web前端.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}