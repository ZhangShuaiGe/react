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

class App extends React.Component {
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
  }

  // 登录框是否显示
  setModalVisible(value)
  {
    this.setState({modalVisible: value});
  };
  // 如果点击谁谁就高亮，如果点击的是登录或者注册 就显示登录框
  handleClick(e){
    if(e.key == "register"){
      this.setState({modalVisible:true});
    }else{
      this.setState({current:e.key});
    }
  }

  handleSubmit(e)
    {
      //页面开始向 API 进行提交数据
      e.preventDefault();
      var myFetchOptions = {
        method: 'GET'
      };
      var formData= this.props.form.getFieldsValue();
      // console.log(formData);
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
      then(response=>response.json()).then(json=>{
        this.setState({userNickName:json.NickUserName,userid:json.UserId});
      });
      message.success("请求成功！");
      this.setModalVisible(false);
    };

  // 登陆调用
  handleSubmit2(e){
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('登录form', values);
            // 登录成功后 hasLogined:true 是为了显示 登录人 
            this.setState({userNickName:values["userName"],hasLogined:true});
            message.success("登录成功！");
            this.setModalVisible(false);
          }else{
            message.success("登录失败！");
          }
      });
  }
  // 退出登录
  loginOut(){
      this.setState({hasLogined:false});
      message.success("已退出！");
  }

  render() {
    // 和表单关联
    const { getFieldDecorator } = this.props.form;
    // 三元表达式 确定是否登录
    const userShow = this.state.hasLogined
    ?
    <div>
      <Button type="dashed">{this.state.userNickName}</Button>
      <Button onClick={this.loginOut.bind(this)} type="primary">退出</Button>
    </div>
    :
    <Button onClick={()=>{this.setModalVisible(true)}}>登录</Button>
    ;

    return (
        <header class="header">
            <Row>
                  <Col span={2}></Col>
                  <Col span={8}>
                      <a href="/" class="logo">
                          <img src="./src/images/logo.png" />
                          <span>react</span>
                      </a>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={10} class="login">
                      {userShow}
                  </Col>
                  <Col span={2}></Col>
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
                       <Form style={{marginTop:"20px"}} onSubmit={this.handleSubmit2.bind(this)} className="login-form">
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
                           <br/>
                           <Button type="primary" htmlType="submit" className="login-form-button">
                             Log in
                           </Button>
                           <br/>
                           Or <a href="">register now!</a>
                         </FormItem>
                       </Form>
                   </TabPane>
                   <TabPane tab="注册" key="2">
                        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                          <FormItem label="账户">
                            <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>
                          </FormItem>
                          <FormItem label="密码">
                            <Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('r_password')}/>
                          </FormItem>
                          <FormItem label="确认密码">
                            <Input type="password" placeholder="请再次输入您的密码" {...getFieldDecorator('r_confirmPassword')}/>
                          </FormItem>
                          <Button type="primary" htmlType="submit" >注册</Button>
                        </Form>
                   </TabPane>
                 </Tabs>
            </Modal>
        </header>
    );
  }
}
export default App = Form.create({})(App);