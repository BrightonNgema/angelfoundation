import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { colors } from '../../utils/theme';
import { animateScroll } from "react-scroll";
import dummyImages from '../../utils/dummyImages';
import { Footer, Loader, NavigationBar } from '../../components';
import NationMediaSection from './NationMediaSection';
import RegionalMediaSection from './RegionalMediaSection';
import MusicMediaSection from './MusicMediaSection';

class Partners extends Component {
    state = { 
        loading:true,
        music_media:[],
        regional_media:[],
        national_media:[]
    }

    componentDidMount(){
        animateScroll.scrollToTop();
        this.setState({loading:false})
        const music_media = this.importAll(require.context('../../assets/music_media', false, /\.(png|jpe?g|svg)$/));
        const regional_media = this.importAll(require.context('../../assets/regional_media', false, /\.(png|jpe?g|svg)$/));
        const national_media = this.importAll(require.context('../../assets/national_media', false, /\.(png|jpe?g|svg)$/));
        this.setState({
            music_media,
            regional_media,
            national_media
        })
    
    }

    importAll = (r) => {
        return r.keys().map(r);
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
                    ),url(${dummyImages[5]})`,display:'flex'}}>
                        <div className="container pt-5" style={{margin:'auto',maxWidth:900, textAlign:'center',color:colors.angel_white}}>
                            <h2 style={{fontWeight:'bold' }}>Partners</h2>
                        </div>    
                    </div>
                    <MusicMediaSection images={this.state.music_media} />
                    <RegionalMediaSection  images={this.state.regional_media} />
                    <NationMediaSection  images={this.state.national_media}/>
                </section>
                <Footer/>
            </div>
        )
    }
}


export default Partners;