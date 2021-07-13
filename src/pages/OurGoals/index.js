import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { colors } from '../../utils/theme';
import { animateScroll } from "react-scroll";
import dummyImages from '../../utils/dummyImages';
import { Footer, Loader, NavigationBar } from '../../components';

class OurGoals extends Component {
    state = { loading:true }

    componentDidMount(){
        animateScroll.scrollToTop();
        this.setState({loading:false})
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
                        rgba(0,0,0, 0.7)
                    ),url(${dummyImages[3]})`,display:'flex'}}>
                        <div className="container pt-5" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                            <h2 style={{fontWeight:'bold' }}>Our Goals</h2>
                        </div>    
                    </div>
                <div style={{height:'300vh'}}/>
                </section>
                <Footer/>
            </div>
        )
    }
}


export default OurGoals;