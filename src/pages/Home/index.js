
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Button from '../../components/Button';
import { colors } from '../../utils/theme';
import { animateScroll } from "react-scroll";
import { FaChartPie } from 'react-icons/fa';


const image1 = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80";

class HomePage extends Component {

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
                        height:'110vh', backgroundImage:`linear-gradient(
                        to bottom,
                        rgba(60,60,60, 0.5),
                        rgba(60,60,60, 0.7)
                    ),url(${image1})`,display:'flex'}}>
                        <div className="container pt-1" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                            <h1 style={{fontSize:75,fontWeight:'bold' }}>Hope For Musicians</h1>
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
                    <div className="container">
                        <div className="container p-5 pt-3 bg-light" style={{marginTop:-80,borderRadius:5}}>
                            <div className="row mb-5 pt-5">
                                <div className="col-4 " style={{borderRight:'1px solid #77777740'}}>
                                    <div style={{textAlign:'center', paddingRight:30}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
                                </div>
                               <div className="col-4" style={{borderRight:'1px solid #77777740'}}>
                                    <div style={{textAlign:'center', paddingRight:10, paddingLeft:10}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
                                </div>
                               <div className="col-4">
                                    <div style={{textAlign:'center', paddingLeft:30}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr style={{backgroundColor:'#777777', height:1}}/>
                            <div className="row mt-5 mb-2">
                                <div className="col-4 " style={{borderRight:'1px solid #77777740'}}>
                                    <div style={{textAlign:'center', paddingRight:30}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
                                </div>
                               <div className="col-4" style={{borderRight:'1px solid #77777740'}}>
                                    <div style={{textAlign:'center', paddingRight:10, paddingLeft:10}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
                                </div>
                               <div className="col-4">
                                    <div style={{textAlign:'center', paddingLeft:30}}>
                                        <FaChartPie size="50" color={colors.angel_orange}/>
                                        <h5 className="mt-4 mb-4" style={{fontWeight:'600',}}>Healthy Food</h5>
                                        <p className="mb-3" style={{fontSize:16}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                                        </p>
                                        <p>
                                            Make a donation
                                        </p>
                                    </div>
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