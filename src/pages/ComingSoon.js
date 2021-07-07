import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'
import Logo from "../assets/angelfoundation_logo_orange.png";

export default class ComingSoon extends Component {
    render() {
        return (
            <div style={{height:'100vh', backgroundColor:'#f9f9f9', flexDirection:'row',display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div style={{textAlign:'center'}}>
                    <img src={Logo} style={{width:250}}/>
                    <h1 style={{textAlign:'center', fontSize:isMobile ? 40: 80, fontWeight:900, marginTop:10}}>Coming Soon</h1>
                </div>
            </div>
        )
    }
}
