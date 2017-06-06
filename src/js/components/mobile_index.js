import React from "react";
import ReactDom from "react-dom";
import Header from "./mobile_header";
import Footer from "./mobile_footer";
export default class Index extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}