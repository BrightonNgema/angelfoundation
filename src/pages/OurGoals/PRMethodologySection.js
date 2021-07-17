import React from 'react'
import { colors } from '../../utils/theme'

const PRMethodologySection = (props) => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:colors.angel_black}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:131, color:'#fff'}}>METHODOLOGY</h1>
                    </div>
                    <h1 className="heading-md bold mt-2 mb-4 text-center mx-auto" style={{color:colors.angel_white, maxWidth:700, alignSelf:'center'}}>
                        Using our methodology, we will ensure that we
                    </h1>
                </div>
            </div>
            <div className="row angel-width mx-auto pt20 text-center" style={{justifyContent:'center'}}>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center pl20 pr20" style={{paddingTop:'6vh',height:300,border:`2px solid ${colors.angel_orange}`, display:'flex', flexDirection:'column',alignItems:'center'}}>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Maximise relationships</h3>
                            <p className="mt-3">through the work we do with the media, stakeholders, musicians and record labels</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center pl20 pr20" style={{paddingTop:'6vh',height:300,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column',alignItems:'center'}}>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Facilitate and ignite conversations</h3>
                            <p className="mt-3">through the generation and dissemination of content</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center pl20 pr20" style={{paddingTop:'6vh',height:300,border:`2px solid ${colors.angel_orange}`, display:'flex', flexDirection:'column',alignItems:'center'}}>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Amplify</h3>
                            <p className="mt-3">the campaign initiative to positively influence The Angel  Foundation for Musicians  and associated brands’ perceptions, as well as generate positive media coverage for the Foundation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PRMethodologySection
