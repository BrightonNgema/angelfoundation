
import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { animateScroll } from "react-scroll";
import { Footer, Loader, NavigationBar } from '../../components'
import Banner from './Banner';
import AboutSection from './AboutSection';
import FoundationSection from './FoundationSection';
import ApproachSection from './ApproachSection';
// import PartnersSection from './PartnersSection';
import { withApollo } from '@apollo/client/react/hoc';
import { YOCO_PAYMENT } from '../../graphql-api/mutations';

class HomePage extends Component {

    state = { loading:true, amount:10000}

    componentDidMount(){
        animateScroll.scrollToTop();
        this.setState({loading:false})
    }

    componentWillReceiveProps(){
        animateScroll.scrollToTop();
    }

    _onDonate = () => {
        // window.open("https://pay.yoco.com/VTCreationssa")
        const yoco = new window.YocoSDK({
            publicKey: 'pk_test_ed3c54a6gOol69qa7f45',
        });

        const that = this
        yoco.showPopup({
            image:"/static/media/angelfoundation_logo_orange.4a9c8ae5.png",
            amountInCents: this.state.amount,
            currency: 'ZAR',
            name: 'Donate to AFM',
            description: 'Awesome description',
            callback: function (result) {
              // This function returns a token that your server can use to capture a payment
              if (result.error) {
                const errorMessage = result.error.message;
                alert("error occured: " + errorMessage);
              } else {
                console.log("card successfully tokenised: ", result);
                that._sendToken(result.id)
              }
              // In a real integration - you would now pass this chargeToken back to your
              // server along with the order/basket that the customer has purchased.
            }
          })
    }


    _sendToken = async (token) => {
        // this.setState({ loading: true})
        try {
            const response = await  this.props.client.mutate({
                mutation: YOCO_PAYMENT,
                variables:{
                    input:{
                        amount:this.state.amount,
                        token,
                    }
                }
            })
            console.log("response", response)
        } catch (error) {
            // this.props.history.push("/")
            console.log("error", error)
        }
    }



    render() {
        if(this.state.loading) return <Loader />
        console.log(this.state)
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Home</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <NavigationBar/>
                <Banner />
                <section>
                    <AboutSection {...this.props}/>
                    <FoundationSection {...this.props}/>
                    <ApproachSection {...this.props}/>
                    {/* <PartnersSection {...this.props}/> */}
                </section>
                <Footer />
            </div>
        )
    }
}


export default withApollo(HomePage);