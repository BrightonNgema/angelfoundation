import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { colors } from '../../utils/theme';
import { animateScroll,scroller } from "react-scroll";
import dummyImages from '../../utils/dummyImages';
import { Footer, Loader, NavigationBar } from '../../components';
import ApproachSection from './ApproachSection';
import EligibleSection from './elegibleSection';
import { isMobile } from 'react-device-detect';


class OurApproach extends Component {
    state = { loading:true }

    componentDidMount(){
        this.setState({loading:false}, () => {
        if(this.props.location.query){
            return this.scrollToSection();
        }
        return animateScroll.scrollToTop();
        });
    }

    scrollToSection = () => {
        scroller.scrollTo(this.props.location.query.scrollId, {
            duration: 500,
            hashSpy: true,
            delay: 100,
            smooth: true,
            offset:isMobile ? -60 : 0
        });
        

    }

    componentWillReceiveProps(){
        animateScroll.scrollToTop();
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
                <NavigationBar />
                <section>
                    <div style={{backgroundPosition:'center', backgroundSize:'cover',
                        height:'60vh', backgroundImage:`linear-gradient(
                        to bottom,
                        rgba(0,0,0, 0.5),
                        rgba(0,0,0, 0.7)),url(${dummyImages[2]})`,display:'flex'}}>
                        <div className="container pt-5" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                            <h2 style={{fontWeight:'bold' }}>Our Approach</h2>
                        </div>    
                    </div>
                    <ApproachSection {...this.props}/>
                    <EligibleSection {...this.props}/>
                    <div className="pt100 pb100" style={{background:colors.angel_black}} id="how-can-you-help">
                        <div className="row angel-width mx-auto">
                            <div>
                                <div className="mx-auto">
                                    <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_white, fontSize:12, width:105, color:colors.angel_orange}}>You Can Help</h1>
                                </div>
                                <h2 className="heading-lg mt-4 mb-4" style={{fontWeight:'bold', color:colors.angel_white}}>
                                    How You Can Help
                                </h2>
                                <p style={{color:colors.angel_white}}>
                                    South Africans can help struggling artists (musicians) by contributing towards The Angel Foundation
                                    <ul className="mt-2">
                                        <li>Be part of the corporate challenge aimed at raising funds for the Angel Foundation for musicians </li>
                                        <li>Donate R10 or more towards The Angel Foundation to support struggling musicians</li>
                                    </ul>
                                    The Angel Foundation, and its  leadership, is a legitimate and honest entity with the main aim of assisting musicians during the difficult times.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}


export default OurApproach;