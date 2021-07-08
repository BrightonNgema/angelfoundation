import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Logo from "../assets/angelfoundation_logo_orange.png";
import { Helmet } from "react-helmet";
import { colors } from '../utils/theme';
import NavigationBar from '../components/NavigationBar';
const image1 = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80";
const image2 = "https://images.unsplash.com/photo-1516137235045-2937f026afed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1653&q=80";
const image3 = "https://images.unsplash.com/photo-1526979118433-63c7344f06f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
const image4 = "https://images.unsplash.com/photo-1584089014821-5c56231bd3b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
const image5 = "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80";
const image6 = "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
];




export default class ComingSoon extends Component {
        state = {
            activeImage:image1
        }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ activeImage: images[Math.floor(Math.random() * images.length)] }), 10000);
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
                <NavigationBar/>
                <div style={{textAlign:'center'}}>
                    <img alt="angle foundation logo" src={Logo} style={{width:300}}/>
                    <h1 style={{textAlign:'center', fontSize:isMobile ? 40: 80,color:colors.angle_white, fontWeight:900, marginTop:10}}>Coming Soon</h1>
                </div>
            </div>
        )
    }
}
