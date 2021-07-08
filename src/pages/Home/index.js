
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import NavigationBar from '../../components/NavigationBar';
import { shopping_api } from '../../utils/shopping-api';


const image1 = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80";

class HomePage extends Component {

    async componentDidMount(){
        const s =  await shopping_api.get("products",{});
        console.log(s.data)
    }

    render() {
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
                height:'100vh', backgroundImage:`linear-gradient(
                to bottom,
                rgba(10,10,10, 0.5),
                rgba(10,10,10, 1)
              ),url(${image1})`,}}/>
              <div style={{height:'300vh'}}/>
                </section>
            </div>
        )
    }
}


export default HomePage;