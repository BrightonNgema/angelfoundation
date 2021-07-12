
import React, { Component } from 'react'
import {Helmet} from "react-helmet";

import { animateScroll } from "react-scroll";
import {
    Button,
    Footer,
    Loader,
    NavigationBar
} from '../../components'
import Banner from './Banner';
import Section1 from './section1';
import Section2 from './section2';
import ApproachSection from './ApproachSection';
import PartnersSection from './PartnersSection';

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
                    <ApproachSection {...this.props}/>
                    <PartnersSection/>
                    
                </section>
                <Footer />
            </div>
        )
    }
}


export default HomePage;