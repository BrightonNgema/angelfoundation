import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Logo from "../assets/angelfoundation_logo_orange.png";
import { Helmet } from "react-helmet";

export default class ComingSoon extends Component {
    render() {
        return (
            <div style={{height:'100vh', backgroundColor:'#f9f9f9', flexDirection:'row',display:'flex',justifyContent:'center', alignItems:'center'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Coming Soon</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <div style={{textAlign:'center'}}>
                    <img alt="angle foundation logo" src={Logo} style={{width:250}}/>
                    <h1 style={{textAlign:'center', fontSize:isMobile ? 40: 80, fontWeight:900, marginTop:10}}>Coming Soon</h1>
                </div>
            </div>
        )
    }
}
