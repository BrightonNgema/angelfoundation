
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { animateScroll } from "react-scroll";
import {
    Button,
    Loader,
    NavigationBar
} from '../../components'
import { colors } from '../../utils/theme';
import Banner from './Banner';
import Section1 from './section1';

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
                    <div className="pt100 pb100" style={{background:colors.angel_dark}} >
                        <div className="row angel-width mx-auto">
                            <div>
                                <div className="mx-auto">
                                    <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_black, fontSize:12, width:95, color:'#fff'}}>Foundation</h1>
                                </div>
                                <h2 className="mt-4 mb-4" style={{lineHeight:1, fontSize:55, textTransform:'uppercase', fontWeight:'bold', color:colors.angel_white}}>
                                    ANGEL FOUNDATION<br/>ESTABLISHED
                                </h2>
                                <p style={{color:colors.angel_white}}>
                                    The Angel Foundation for Musicians (AFM) was initiated by a core group of music industry executives in January 2020.<br/><br/>
                                    The financial impact of the lockdown measures was confirmed through a widely publicized report commissioned by the South African Cultural Observatory (SACO) in association with IKS Cultural Consulting titled “Impact Analysis: Live Music and its Venues and the South African economy during COVID-19.”
                                </p>
                                <Button
                                    className="dark lg mt-3"
                                    title="Discover More"
                                    onClick={() =>  this.props.history.push('/about')}
                                />
                            </div>
                        </div>
                    </div>
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
                                    <div style={{height:350,border:`2px solid ${colors.angel_orange}`}}>

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
                                    <div style={{height:350,border:`2px solid ${colors.angel_yellow}`}}>

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
                                    onClick={() =>  this.props.history.push('/about')}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default HomePage;