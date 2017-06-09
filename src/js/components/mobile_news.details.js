import React from 'react';
import {Row, Col} from 'antd';
import Header from "./mobile_header.js";
import Footer from "./mobile_footer.js";
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
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
              <Col span={20} className="container">
                  <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              </Col>
              <Col span={2}></Col>
          </Row>

          <Footer />
 
      </div>
    );
  };
}
