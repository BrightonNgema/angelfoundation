import React from 'react';
import { Button } from '../../components';
import { colors } from '../../utils/theme';

//music media
import BET from '../../assets/music_media/bet.png'
import CHANNELO from '../../assets/music_media/channelo.png'
import MTV from '../../assets/music_media/mtv.png'
import SABC from '../../assets/music_media/sabc.png'
import SLIKOUR from '../../assets/music_media/slikour.png'
import TRACE from '../../assets/music_media/trace.png';

//national media
import ENCA from '../../assets/national_media/enca.png'
import CITYPRESS from '../../assets/national_media/citypress.png'
import LADUMA from '../../assets/national_media/laduma.png'
import METROFM from '../../assets/national_media/metrofm.png'
import THOBELA from '../../assets/national_media/thobela.png'
import UKHOZI from '../../assets/national_media/ukhozi.png'

//regional media
import FM947 from '../../assets/regional_media/947.png'
import EASTCOAST from '../../assets/regional_media/eastcoast.png'
import KAYA from '../../assets/regional_media/kayafm.png'
import VOLKSBALD from '../../assets/regional_media/volksblad.png'
import MPUMALANGANEWS from '../../assets/regional_media/mpumalanganews.png'
import POWERFM from '../../assets/regional_media/powerfm.png'

const PartnersSection = (props) => {
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
            <div className="row angel-width mx-auto pt50">
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center ">
                    <img alt="angel foundation clients" className="client-logos" src={BET}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={CHANNELO}/>
                </div>
               <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={SABC}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={MTV}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={SLIKOUR}/>
                </div>
               <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={TRACE}/>
                </div>
        
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={ENCA}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={CITYPRESS}/>
                </div>
               
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={METROFM}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={THOBELA}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={LADUMA}/>
                </div>
               <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={UKHOZI}/>
                </div>
            
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={POWERFM}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={EASTCOAST}/>
                </div>
                <div className="col-md-2 col-6 pb-3 text-center ">
                    <img alt="angel foundation clients" className="client-logos" src={FM947}/>
                </div>
               <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={KAYA}/>
                </div>
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={MPUMALANGANEWS}/>
                </div>
               
                <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center">
                    <img alt="angel foundation clients" className="client-logos" src={VOLKSBALD}/>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="text-center">
                    <Button
                        className="dark lg mt-3"
                        title="View More"
                        onClick={() => props.history.push('/partners')}
                    />
                </div>
            </div>
        </div>
    )
}

export default PartnersSection
