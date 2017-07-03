import React from 'react';
import {Row, Col,Card} from 'antd';
import Header from "./pc_header";
import Footer from "./pc_footer";
import Newslist from "./pc_news_image_block.js";
import Comment from "./comment.js";
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: '',
      ago:"",
    };
  };
  
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    console.log(this.props.params);
    console.log(this.props.params.uniquekey);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      console.log(this.state.newsItem);
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    })
  };

  createMarkup() {
      return {__html: this.state.newsItem.pagecontent};
  };


  render() {
    return (
      <div>

          <Header />

          <Row>
              <Col span={2}></Col>
              <Col span={14} className="container">
                  <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                  </div>
                  <Comment />
              </Col>
              <Col span={6}>
                  <Newslist count={20} type="top" width={"300px"} liwidth={"40%"}/>
              </Col>
              <Col span={2}></Col>
          </Row>

          <Footer />

      </div>
    );
  };
}
