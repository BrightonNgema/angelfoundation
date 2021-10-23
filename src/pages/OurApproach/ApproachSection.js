import React from 'react'
import { colors } from '../../utils/theme'
import { GiTicket } from "react-icons/gi";
import { RiHandCoinLine } from 'react-icons/ri';

const ApproachSection = () => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:'#F7FBFF'}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:131, color:'#fff'}}>Helping Musician</h1>
                    </div>
                    <h1 className="heading-md bold mt-2 mb-4 text-center mx-auto" style={{color:colors.angel_black, maxWidth:700, alignSelf:'center'}}>
                        HOW THE ANGEL FOUNDATION WILL HELP AFFECTED MUSICIANS  
                    </h1>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40 text-center" style={{justifyContent:'center'}}>
                {/* <div className="col-lg-2 col-1"></div> */}
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center pt30" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <GiTicket size={60} color={colors.angel_dark}/>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital food vouchers </h3>
                            <p className="pr20 pl20 mt20">
                                Digital food vouchers will be provided to the qualifying recipients without 
                                subjecting them to stand in queues to receive food parcels
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div style={{height:350,border:`2px solid ${colors.angel_orange}`}}>

                        </div>
                    </div>
                </div> */}
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center pt30" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <RiHandCoinLine size={60} color={colors.angel_dark}/>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital cash vouchers</h3>
                            <p className="pr20 pl20 mt20">
                                Digital cash vouchers to the value of R800 will be given to the affected 
                                musicians for food and other necessities 
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-2 col-1"></div> */}
            </div>
            <div className="row angel-width mx-auto pt40 text-center" >
                <p style={{maxWidth:800, margin:'0px auto 30px'}}>
                These grants will be provided based on the funds available in any given period and may be granted more than once to the beneficiaries.
                <br/> <br/>
                The initial beneficiaries will be selected from a list of musicians supplied by various stakeholders in the music industry across the country. 
                <br/> <br/>
                The next set of beneficiaries will be selected from those who completed the relevant application form. 
                </p>
            </div>
        </div>
    )
}

export default ApproachSection
