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
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router';

export default class comments extends React.Component {

    constructor(){
        super();
        this.state = {
            comments:"",
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        });
    };

    submit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var $text = this.refs.text.value;
    }   

    render(){

        return(
            <Row>
                <Col span={24}>
                    <Card refs="append">
                        
                    </Card>
                    <Card>
                        <div>
                            <form onSubmit={this.submit.bind(this)}>
                                <textarea ref="text" rows="3" cols="30" placeholder="说点啥呢" style={{width:"100%",height:"160px"}}></textarea>
                                <button style={{padding:"5px"}}>评论</button>
                            </form>
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}
