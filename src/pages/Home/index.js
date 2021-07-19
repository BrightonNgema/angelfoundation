
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

    state = { loading:true, amount:10}

    componentDidMount(){
        animateScroll.scrollToTop();
        this.setState({loading:false})
    }

    componentWillReceiveProps(){
        animateScroll.scrollToTop();
    }

    _onDonate = () => {
        window.open("https://pay.yoco.com/VTCreationssa")
        // yoco.showPopup({
        //     image:"/static/media/angelfoundation_logo_orange.4a9c8ae5.png",
        //     amountInCents: this.state.amount*100,
        //     currency: 'ZAR',
        //     name: 'Donate to AFM',
        //     description: 'Awesome description',
        //     callback: function (result) {
        //       // This function returns a token that your server can use to capture a payment
        //       if (result.error) {
        //         const errorMessage = result.error.message;
        //         alert("error occured: " + errorMessage);
        //       } else {
        //         alert("card successfully tokenised: " + result.id);
        //       }
        //       // In a real integration - you would now pass this chargeToken back to your
        //       // server along with the order/basket that the customer has purchased.
        //     }
        //   })
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