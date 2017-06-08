import React from "react";
import ReactDom from "react-dom";
import Header from "./pc_header";
import Footer from "./pc_footer";
import Body from "./pc_newscontainer.js";
export default class Index extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}