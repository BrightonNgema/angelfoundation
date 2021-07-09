import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { colors } from '../../utils/theme';
import { animateScroll } from "react-scroll";
import dummyImages from '../../utils/dummyImages';

class HowYouCanHelp extends Component {

    componentDidMount(){
        animateScroll.scrollToTop();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Home</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <section>
                    <div style={{backgroundPosition:'center', backgroundSize:'cover',
                        height:'60vh', backgroundImage:`linear-gradient(
                        to bottom,
                        rgba(0,0,0, 0.5),
                        rgba(0,0,0, 0.7)
                    ),url(${dummyImages[4]})`,display:'flex'}}>
                        <div className="container pt-5" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                            <h2 style={{fontWeight:'bold' }}>How You Can Help?</h2>
                        </div>    
                    </div>
                <div style={{height:'300vh'}}/>
                </section>
            </div>
        )
    }
}


export default HowYouCanHelp;