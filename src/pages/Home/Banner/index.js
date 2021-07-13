import React from 'react'
import Button from '../../../components/Button';
import { scroller } from "react-scroll";
import { isMobile } from 'react-device-detect';

const Banner = () => {

    const onScroll = () => {
        return scroller.scrollTo("about-summary", {
            duration: 500,
            hashSpy: true,
            delay: 100,
            smooth: true,
            offset:isMobile ? -60 : -100
        });
    }
    return (
        <div className="home-landing">
            <div className="home-landing-content container pt-1">
                <h1>Hope For Musicians</h1>
                <p>
                    Mi in nulla posuere sollicitudin aliquam ultrices sagittis. 
                    Egestas quis ipsum suspendisse ultrices gravida. 
                    Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. 
                    Arcu risus quis varius quam quisque id diam. 
                    Aliquet enim tortor at auctor urna nunc id
                </p>
                <div className="row mt-5" style={{width:'100%',justifyContent:'center'}}>
                    <div className="col-auto mr-3 mb-4"> 
                        <Button className="primary lg" title="Donate Now"/>
                    </div>
                    <div className="col-auto"> 
                        <Button className="dark lg" title="Discover More" onClick={onScroll}/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Banner
