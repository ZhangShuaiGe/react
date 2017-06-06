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
  Checkbox,
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PcHeader extends React.Component {
  constructor(){
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined:false,
      userNickName: '',
      userid: 0,
    }
  };
  // 登录框是否显示
  setModalVisible(value)
  {
    this.setState({modalVisible: value});
  };
  // 如果点击谁谁就高亮，如果点击的是登录或者注册 就显示登录框
  // handleClick(e) {
  //   if (e.key == "register") {
  //     this.setState({current: 'register'});
  //     this.setModalVisible(true);
  //   } else {
  //     {
  //       this.setState({current: e.key});
  //     }
  //   }
  // };
  handleClick(e){
    if(e.key == "register"){
      this.setState({modalVisible:true});
    }else{
      this.setState({current:e.key});
    }
  }

  render() {
    let {getFieldDecorator} = this.props.form;
    console.log(this.state.hasLogined);
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank">
            <Button type="dashed" htmlType="Button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="Button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" class="register">
        <Icon type="appstore"/>注册/登录
    </Menu.Item>
    ;

    return (
      <header>
        <Row>
            <Col span={2}></Col>
            <Col span={4}>
                <a href="/" class="logo">
                    <img src="./src/images/logo.png" />
                    <span>react</span>
                </a>
            </Col>
            <Col span={16}>
                <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                    <Menu.Item key="top">
                      <Icon type="appstore"/>头条7
                    </Menu.Item>
                    <Menu.Item key="shehui">
                      <Icon type="appstore"/>社会
                    </Menu.Item>
                    <Menu.Item key="guonei">
                      <Icon type="appstore"/>国内
                    </Menu.Item>
                    <Menu.Item key="guoji">
                      <Icon type="appstore"/>国际
                    </Menu.Item>
                    <Menu.Item key="yule">
                      <Icon type="appstore"/>娱乐
                    </Menu.Item>
                    <Menu.Item key="tiyu">
                      <Icon type="appstore"/>体育
                    </Menu.Item>
                    <Menu.Item key="keji">
                      <Icon type="appstore"/>科技
                    </Menu.Item>
                    <Menu.Item key="shishang">
                      <Icon type="appstore"/>时尚
                    </Menu.Item>
                    {userShow}
                </Menu>
            </Col>
            <Col span={2}>
            </Col>
        </Row>
        <Modal
          title="个人中心"
          // 显示
          visible={this.state.modalVisible}
          // 点击确定
          onOk={()=>{this.setModalVisible(false)}}
          // 点击取消
          onCancel={()=>{this.setModalVisible(false)}}
          okText="确认"
          cancelText="取消"
        >
            <Tabs defaultActiveKey="1">
               <TabPane tab="登录" key="1">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                          {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                          )}
                        </FormItem>
                        <FormItem>
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                          )}
                        </FormItem>
                        <FormItem>
                          {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                          })(
                            <Checkbox>Remember me</Checkbox>
                          )}
                          <a className="login-form-forgot" href="">Forgot password</a>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                          </Button>
                          Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
               </TabPane>
               <TabPane tab="注册" key="2">

               </TabPane>
             </Tabs>
        </Modal>
       </header>
    );
  }

}

export default PcHeader = Form.create({})(PcHeader);