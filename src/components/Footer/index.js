import React from 'react'
import { colors } from '../../utils/theme'
import Logo from "../../assets/angelfoundation_logo_white.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,FaTwitter } from "react-icons/fa";

const Footer = () => {

    const onSocial = (social) =>{
        switch (social) {
            case "facebook": alert("facebook clicked")
                break;
            case "twitter":alert("twitter clicked")
                break;
            case "instagram": alert("instagram clicked")
                break;
            default:
                break;
        }
    }
    
    return (
        <div>
            <div style={{backgroundColor:'#111'}}>
                <div className="angel-width mx-auto">
                    <div className="row pt60 pb30" style={{color:colors.angel_white}}>
                        <div className="col-md-5">
                            <div>
                                <img alt="angle foundation logo" className="mb-3" src={Logo} style={{height:80}}/>
                                <p className="pt-3">
                                    The Angel Foundation for Musicians (AFM) was initiated by a core group of music industry executives in January 2020.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 pt-5">
                            <h5 className="mb-4">QUICK LINKS</h5>
                        </div>
                        <div className="col-md-3 pt-5">
                            <h5 className="mb-4">Contact Info</h5>
                        </div>
                        <div className="col-md-2 pt-5">
                            <h5 className="mb-4">social</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:colors.angel_black}}>
                <div className="angel-width mx-auto">
                    <div className="row pt-3" style={{color:colors.angel_white}}>
                        <div className="col-md-6">
                            <p>© Takealot Online (Pty) Ltd.</p>
                        </div>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <div style={{display:'flex',justifyContent:"flex-end", alignItems:'center'}}>
                                <FaFacebook onClick={() => onSocial('facebook')} className="social-icon mr20" size="18px"/>
                                <FaTwitter onClick={() => onSocial('twitter')} className="social-icon mr20" size="21px"/>
                                <AiFillInstagram onClick={() => onSocial('instagram')} className="social-icon mr20" size="21px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
