import React from 'react'
import { colors } from '../../utils/theme'

const ConcernsSection = (props) => {
    return (
        <div className="pt100 pb100 mx-auto" style={{background:colors.angel_black}} >
            <div className="row angel-width mx-auto">
                <div className="col-12 text-center">
                    <div className="mx-auto" style={{display:'flex', justifyContent:'center'}}>
                        <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:131, color:'#fff'}}>Helping Musician</h1>
                    </div>
                    <h1 className="heading-md bold mt-2 mb-4 text-center mx-auto" style={{color:colors.angel_white, width:700, alignSelf:'center'}}>
                        Some of the concerns raised by artists
                    </h1>
                    <p className="bold mx-auto" style={{width:600,color:colors.angel_white,}}>
                        The funds had been mismanaged - Transparency and answers are the things that the artist seek to receive from the NAC.
                    </p>
                </div>
            </div>
            <div className="row angel-width mx-auto pt20 text-center" style={{justifyContent:'center'}}>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center" style={{height:200,border:`2px solid ${colors.angel_orange}`, display:'flex',justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <p className="pr20 pl20 mt20 bold">
                                The National Arts Council (NAC) to supply a list of all those who benefited from a COVID-19 relief fund 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <div className="p-2" style={{backgroundColor:'#fff'}}>
                        <div className="text-center" style={{height:200,border:`2px solid ${colors.angel_yellow}`, display:'flex',justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                            <p className="pr20 pl20 mt20 bold">
                                An explanation of what happened to the rest of the money
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConcernsSection
