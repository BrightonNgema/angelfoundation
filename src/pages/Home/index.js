
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { RiHandCoinLine } from 'react-icons/ri';
import { GiTicket } from "react-icons/gi";
import { animateScroll } from "react-scroll";
import {
    Button,
    Footer,
    Loader,
    NavigationBar
} from '../../components'
import { colors } from '../../utils/theme';
import Banner from './Banner';
import Section1 from './section1';
import Section2 from './section2';

class HomePage extends Component {

    state = {
        loading:true
    }

    componentDidMount(){
        animateScroll.scrollToTop();
        this.setState({loading:false})
    }

    render() {
        if(this.state.loading) return <Loader />
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Home</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <NavigationBar/>
                <Banner/>
                <section>
                    <Section1 {...this.props}/>
                    <Section2 {...this.props}/>
                    
                    <div className="pt100 pb100 mx-auto" style={{background:'#F7FBFF'}} >
                        <div className="row angel-width mx-auto">
                            <div className="col-12 text-center">
                                <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                                    <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:80, color:'#fff'}}>Solution</h1>
                                </div>
                                <h2 className="mt-2 mb-4 " style={{lineHeight:1, fontSize:55, textTransform:'uppercase', fontWeight:'bold', color:colors.angel_black}}>
                                    Our Approach
                                </h2>
                            </div>
                        </div>
                        <div className="row angel-width mx-auto pt40">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <div className="p-2" style={{backgroundColor:'#fff'}}>
                                    <div className="text-center" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                        <GiTicket size={60} color={colors.angel_dark}/>
                                        <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital food vouchers </h3>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="p-2" style={{backgroundColor:'#fff'}}>
                                    <div style={{height:350,border:`2px solid ${colors.angel_orange}`}}>

                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-4">
                                <div className="p-2" style={{backgroundColor:'#fff'}}>
                                    <div className="text-center" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                        <RiHandCoinLine size={60} color={colors.angel_dark}/>
                                        <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital cash vouchers</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row angel-width mx-auto pt40">
                            <div className="text-center">
                                <Button
                                    className="primary lg mt-3"
                                    title="mORE ON oUR aPPROACH"
                                    onClick={() =>  this.props.history.push('/our-approach')}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}


export default HomePage;