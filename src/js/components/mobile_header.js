import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      current: 'top',
    }
  }
  render() {
    return (
        <header class="header">
            <Row>
                  <Col span={2}></Col>
                  <Col span={4}>
                      <a href="/" class="logo">
                          <img src="./src/images/logo.png" />
                          <span>react</span>
                      </a>
                  </Col>
            </Row>
        </header>
    );
  }
}