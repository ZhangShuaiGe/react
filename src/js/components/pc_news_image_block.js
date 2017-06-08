/* 
* @Author: anchen
* @Date:   2017-06-07 18:15:26
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-08 18:21:07
*/
import React from "react";
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
export default class NewsImg extends React.Component{

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };

    render() {
            // 超出隐藏
            const ellipsis = {
                overflow:"hidden",
                textOverflow:"ellipsis",
                whiteSpace:"nowrap",
            };

            const {news} = this.state;

            console.log(news);

            const newsList = news.length
                ? news.map((newsItem, index) => (
                    <li key={index} style={{width:this.props.liwidth}}>
                        <Link title={newsItem.title} to={`details/${newsItem.uniquekey}`} target="_blank">
                            <div>
                                <img style={{width:this.props.imgWidth}} src={newsItem.thumbnail_pic_s} />
                            </div>
                            <div>
                                <h3 style={ellipsis}>{newsItem.title}</h3>
                                <p style={{color:"#666"}}>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </li>
                ))
                : '没有加载到任何新闻';

            return (
                <div class="img_list_box" style={{width:this.props.width}}>
                    <Card title={this.props.title}>
                        <ul class="img_list">
                            {newsList}
                        </ul>
                    </Card>
                </div>
            );
    };
}