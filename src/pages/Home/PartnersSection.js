import React from 'react';
import { Button } from '../../components';
import { colors } from '../../utils/theme';

import BET from '../../assets/music_media/bet.png'
import CHANNELO from '../../assets/music_media/channelo.png'
import MTV from '../../assets/music_media/mtv.png'
import SABC from '../../assets/music_media/sabc.png'
import SLIKOUR from '../../assets/music_media/slikour.png'
import TRACE from '../../assets/music_media/trace.png'
// import BET from '../../assets/music_media/bet.png'

const PartnersSection = () => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:colors.angel_white}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:80, color:'#fff'}}>Partners</h1>
                    </div>
                    <h2 className="heading-lg bold mt-2 mb-4" style={{color:colors.angel_black}}>
                        Our Partners
                    </h2>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="col-2 text-center ">
                    <img src={BET} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={CHANNELO} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={SABC} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={MTV} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={SLIKOUR} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={TRACE} style={{height:70}}/>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="col-2 text-center ">
                    <img src={BET} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={CHANNELO} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={SABC} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={MTV} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={SLIKOUR} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={TRACE} style={{height:70}}/>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="col-2 text-center ">
                    <img src={BET} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={CHANNELO} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={SABC} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={MTV} style={{height:70}}/>
                </div>
                 <div className="col-2 text-center">
                    <img src={SLIKOUR} style={{height:70}}/>
                </div>
                <div className="col-2 text-center">
                    <img src={TRACE} style={{height:70}}/>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="text-center">
                    <Button
                        className="dark lg mt-3"
                        title="View More"
                        onClick={() =>  this.props.history.push('/our-approach')}
                    />
                </div>
            </div>
        </div>
    )
}

export default PartnersSection
