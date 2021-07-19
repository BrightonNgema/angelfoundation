import React from 'react'
import Button from '../../../components/Button';
import { scroller } from "react-scroll";
import { isMobile } from 'react-device-detect';

const Banner = ({onDonate}) => {

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
                <h1 className="heading-lg">Hope For Musicians</h1>
                <p style={{maxWidth:600,margin:'auto'}}>
                 The Angel Foundation, and its  leadership, is a legitimate and honest entity with the main aim of assisting musicians during the difficult times.
                </p>
                <div className="row mt-5" style={{width:'100%',justifyContent:'center'}}>
                    {onDonate && <div className="col-auto mr-3 mb-4"> 
                        <Button className="primary lg" title="Donate Now" onClick={onDonate}/>
                    </div>}
                    <div className="col-auto"> 
                        <Button className="dark lg" title="Discover More" onClick={onScroll}/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Banner
