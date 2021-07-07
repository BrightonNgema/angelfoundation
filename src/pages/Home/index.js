
import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Angel Foundation - Home</title>
                    <link rel="canonical" href="https://www.angelfoundation.africa/" />
                </Helmet>
                <h1>Home Page</h1>
            </div>
        )
    }
}


export default HomePage;