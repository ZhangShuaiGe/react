import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from "./pc_news_block.js";
import PCNewsImages from "./pc_news_image_block.js";
export default class PCNewsContainer extends React.Component {
	render() {

    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        autoplay:true
    };

    const clear = {
        overflow:"hidden",
    }

		return (
			<div class="news_box">

          <Row>
              <Col span={4}></Col>
              <Col span={16} style={clear}>
                  {/* 轮播 + 短列表*/}
                  <div class="leftContainer">
                      <div class="carousel">
                          <Carousel class="img_box" {...settings}>
                            <div><img src="http://image.hskaoyan.com/study/meal/58ec6eed267e1.png"/></div>
                            <div><img src="http://image.hskaoyan.com/study/course/58f9e1251d906.jpeg"/></div>
                            <div><img src="http://image.hskaoyan.com/study/course/58f9e111ce6ce.jpeg"/></div>
                            <div><img src="http://image.hskaoyan.com/study/course/58f9dfe1b06d2.jpeg"/></div>
                          </Carousel>
                      </div>
                      <PCNewsImages liwidth={"31%"}  title="娱乐" count={6} type="yule" width={"400px"} bordered="false" />
                  </div>
                  {/* 选项卡*/}
                  <Tabs class="news_tabs">
                      <TabPane tab="头条" key="1">
                          <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                      </TabPane>
                      <TabPane tab="国际" key="2">
                          <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                      </TabPane>
                  </Tabs>
              </Col>
              <Col span={4}></Col>
          </Row>

          {/*长列表*/}
          <Row>
              <Col span={4}></Col>
              <Col span={18}>
                  <PCNewsImages liwidth={"132px"} title="军事" count={8} type="junshi" width="100%" bordered="false" imgWidth="132px"/>
                  <PCNewsImages liwidth={"132px"} title="国内" count={8} type="guonei" width="100%" bordered="false" />
              </Col>
              <Col span={4}></Col>
          </Row>
          
			</div>
		);

	};
}
