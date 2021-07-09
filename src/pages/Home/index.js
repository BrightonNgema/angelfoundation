
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Button from '../../components/Button';
import NavigationBar from '../../components/NavigationBar';
import { shopping_api } from '../../utils/shopping-api';
import { colors } from '../../utils/theme';


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
                        rgba(60,60,60, 0.5),
                        rgba(60,60,60, 0.7)
                    ),url(${image1})`,display:'flex'}}>
                    <div className="container pt-5" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                        <h1 style={{fontSize:80, }}>Hope For Musicians</h1>
                        <p>
                            Mi in nulla posuere sollicitudin aliquam ultrices sagittis. 
                            Egestas quis ipsum suspendisse ultrices gravida. 
                            Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. 
                            Arcu risus quis varius quam quisque id diam. 
                            Aliquet enim tortor at auctor urna nunc id
                        </p>
                        <div className="row mt-5" style={{width:'100%',justifyContent:'center'}}>
                            <div className="col-auto mr-3"> 
                                <Button className="primary lg" title="Donate Now"/>
                            </div>
                            <div className="col-auto"> 
                                <Button className="dark lg" title="Discover More"/>
                            </div>
                        </div>
                    </div>    
                </div>
                <div style={{height:'300vh'}}/>
                </section>
            </div>
        )
    }
}


export default HomePage;