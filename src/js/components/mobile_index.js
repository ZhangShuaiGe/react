import React from "react";
import ReactDom from "react-dom";
import Header from "./mobile_header";
import Footer from "./mobile_footer";
import Newslist from "./mobile_news_list.js";
import {Tabs} from "antd";
const TabPane = Tabs.TabPane;

export default class Index extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <Newslist type="top" count={20}  />
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <Newslist type="shehui" count={20}  />
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <Newslist type="guonei" count={20}  />
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <Newslist type="国际" count={20}  />
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <Newslist type="yule" count={20}  />
                    </TabPane>
                </Tabs>
                <Footer />
            </div>
        )
    }
}