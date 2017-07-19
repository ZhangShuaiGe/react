import React from 'react';
import {Row, Col} from 'antd';
import {Link,hashHistory} from 'react-router';
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
  // 加载前
  componentWillMount(){
      if(localStorage.userName != undefined){
          this.setState({hasLogined:true,userNickName:localStorage.userName});
      }
      // 如果进入news页面 要查看 redux 传过来的 导航值，给导航加下划线
      if(this.props.reduser != undefined){
          console.log(this.props.reduser);
          this.setState({current:this.props.reduser.type});
      }
  }
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
        // 触发actions
        this.props.actions.head({
            type:e.key,
        })
      // 跳转新闻页面
      const path = `/pc_news/${e.key}`
      hashHistory.push(path);
    }
  }
  // 注册调用
  handleSubmit(e)
    {
      //页面开始向 API 进行提交数据
      e.preventDefault();
      var myFetchOptions = {
        method: 'GET'
      };
      this.props.form.validateFields((err,values)=>{
        console.log("注册"+values);
      })
      var formData= this.props.form.getFieldsValue();
      // console.log(this.props.form.validateFields);
      // console.log(formData);
      console.log(formData.r_userName);
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
      console.log(this.props.form.validateFields);
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('登录form', values);
          // 登录成功后 hasLogined:true 是为了显示 登录人 
          this.setState({userNickName:values["userName"],hasLogined:true});
          // 存储
          window.localStorage.setItem("userName",values["userName"]);
          // window.localStorage.setItem("userid",this.state.userid);
          message.success("登录成功！");
          this.setModalVisible(false);
        }else{
          message.success("登录失败！");
        }
      });
    }
  // 退出
  loginOut(){
      this.setState({hasLogined:false});
      message.success("已退出！");
      localStorage.removeItem("userName");
      this.setState({hasLogined:false});
  }
  // 点击个人中心
  center(){
    message.success("暂未开通！！！正在建设！！！");
  }

  render() {
    // 和表单关联
    const { getFieldDecorator } = this.props.form;
    // 三元表达式 确定是否登录
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Button onClick={this.center.bind(this)} type="dashed" htmlType="Button">个人中心</Button>
        &nbsp;&nbsp;
        <Button onClick={this.loginOut.bind(this)} type="ghost" htmlType="Button">退出</Button>
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
                      <Icon type="appstore"/>头条
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
                   <Form onSubmit={this.handleSubmit2.bind(this)} className="login-form" style={{marginTop:"20px"}}>
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
                       <Button type="primary" htmlType="submit" className="login-form-button login_button">
                         登录
                       </Button>
                       <br/>
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

export default PcHeader = Form.create({})(PcHeader);