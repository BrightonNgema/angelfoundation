
import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { animateScroll } from "react-scroll";
import { Footer, Loader, NavigationBar } from '../../components'
import Banner from './Banner';
import AboutSection from './AboutSection';
import FoundationSection from './FoundationSection';
import ApproachSection from './ApproachSection';
import PartnersSection from './PartnersSection';

class HomePage extends Component {

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
                <NavigationBar/>
                <Banner/>
                <section>
                    <AboutSection {...this.props}/>
                    <FoundationSection {...this.props}/>
                    <ApproachSection {...this.props}/>
                    <PartnersSection {...this.props}/>
                </section>
                <Footer />
            </div>
        )
    }
}


export default HomePage;