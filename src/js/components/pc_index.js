import React from "react";
import ReactDom from "react-dom";
import Header from "./pc_header";
import Footer from "./pc_footer";

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