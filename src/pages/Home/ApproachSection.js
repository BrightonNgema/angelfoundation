import React from 'react'
import { colors } from '../../utils/theme'
import { GiTicket } from "react-icons/gi";
import { RiHandCoinLine } from 'react-icons/ri';
import {
    Button,
} from '../../components'

const ApproachSection = (props) => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:'#F7FBFF'}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:80, color:'#fff'}}>Solution</h1>
                    </div>
                    <h2 className="heading-lg bold mt-2 mb-4" style={{color:colors.angel_black}}>
                        Our Approach
                    </h2>
                </div>
            </div>
            <div className="row angel-width mx-auto pt40 text-center" style={{justifyContent:'center'}}>
                {/* <div className="col-lg-2 col-1"></div> */}
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <GiTicket size={60} color={colors.angel_dark}/>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital food vouchers </h3>
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
                        <div className="text-center" style={{height:350,border:`2px solid ${colors.angel_yellow}`, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <RiHandCoinLine size={60} color={colors.angel_dark}/>
                            <h3 className="mt-3" style={{lineHeight:1, fontWeight:600, colors:colors.angel_dark}}>Digital cash vouchers</h3>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-2 col-1"></div> */}
            </div>
            <div className="row angel-width mx-auto pt40">
                <div className="text-center">
                    <Button
                        className="primary lg mt-3"
                        title="mORE ON oUR aPPROACH"
                        onClick={() =>  props.history.push('/our-approach')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ApproachSection
