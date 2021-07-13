import React from 'react'
import { colors } from '../../utils/theme'

const MusicMediaSection = ({images}) => {
    const baseUrl = window.location.origin
    return (
        <div className="pt100 pb100 mx-auto" style={{background:colors.angel_white}} >
        <div className="row angel-width mx-auto">
            <div className="col-12">
                <div className="mx-auto" style={{display:'flex',}}>
                    <h1 style={{padding:"5px 10px", backgroundColor:colors.angel_orange, fontSize:12, width:57, color:'#fff'}}>Music</h1>
                </div>
                <h2 className="heading-lg bold mt-2" style={{color:colors.angel_black}}>
                    Music Media
                </h2>
            </div>
        </div>
        <div className="row angel-width mx-auto pt20">    
            {images.map((image) => {
                const imageUrl = image.default.includes("data") ? image.default : baseUrl+image.default
                return(
                    <div className="col-md-2 col-6 pb-3 mt-auto mb-auto text-center ">
                        <img alt="angel foundation clients" className="client-logos" src={imageUrl}/>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default MusicMediaSection
