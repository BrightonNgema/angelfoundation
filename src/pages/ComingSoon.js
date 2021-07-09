import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Logo from "../assets/angelfoundation_logo_orange.png";
import { Helmet } from "react-helmet";
import { colors } from '../utils/theme';
import dummyImages from '../utils/dummyImages';

export default class ComingSoon extends Component {
        state = {
            activeImage:dummyImages[0]
        }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ activeImage: dummyImages[Math.floor(Math.random() * dummyImages.length)] }), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
   
    render() {
        return (
            <div style={{
                backgroundPosition:'center', backgroundSize:'cover',
                height:'100vh', backgroundImage:`linear-gradient(
                to bottom,
                rgba(255,255,255, 0),
                rgba(10,10,10, 1)
              ),url(${this.state.activeImage})`, flexDirection:'row',display:'flex',justifyContent:'center', alignItems:'center'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Coming Soon</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <div style={{textAlign:'center'}}>
                    <img alt="angle foundation logo" src={Logo} style={{width:300}}/>
                    <h1 style={{textAlign:'center', fontSize:isMobile ? 40: 80,color:colors.angel_white, fontWeight:900, marginTop:10}}>Coming Soon</h1>
                </div>
            </div>
        )
    }
}
