import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,FaTwitter } from "react-icons/fa";
import Logo from "../../assets/angelfoundation_logo_white.png";
import { Link } from 'react-router-dom';
import { colors } from '../../utils/theme';
import { useWindowSize } from '../../utils/useWindow';
const links = [
    {
        name:"About Us",
        link:"/about"
    },
    {
        name:"Our Approach",
        link:"/our-approach"
    },
    {
        name:"Our Goals",
        link:"/our-goals"
    },
    {
        name:"How You Can Help?",
        link:"/how-you-can-help"
    },
    {
        name:"Partners",
        link:"/partners"
    }
];

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

const Footer = () => {
    const isSmallScreen = useWindowSize().width < 767

    return (
        <footer>
          <div className="pt60 pb30" style={{backgroundColor:'#111', color:"#f7f7f7"}}>
            <div className="container angel-width">
                <div className="row">
                <div className="col-sm-12 col-md-5">
                    {/* <h4 className="mb-4">Angel Foundation</h4> */}
                    <img className="mb-4" alt="angle foundation logo" src={Logo} style={{height:60}}/>
                    <p className="text-left pl-5" style={{fontSize:14}}>
                        The Angel Foundation for Musicians (AFM) was initiated <br/>
                         by a core group of music industry executives in January 2020.
                    </p>
                    <div className="social-icons">
                        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',width:100,}}>
                            <FaFacebook onClick={() => onSocial('facebook')} className="social-icon" size="20px"/>
                            <FaTwitter onClick={() => onSocial('twitter')} className="social-icon" size="23px"/>
                            <AiFillInstagram onClick={() => onSocial('instagram')} className="social-icon" size="23px"/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-md-4">
                    <h4 className="mb-4 pt30">CONTACT DETAILS</h4>
                    <div className="text-left mb-2 bold" style={{fontSize:14}}>
                        123 Street, Sandton, 1983
                    </div>
                    <div className="mb-2">
                        <span style={{fontSize:14}}>Tel: <a className="link-primary bold" target="_blank" rel="noreferrer" href="tel:27 (0) 16 931 0899">+27 (0) 11 234 5678</a></span>
                    </div>
                    <div>
                        <span style={{fontSize:14}}>Email: <a className="link-primary bold" target="_blank" rel="noreferrer" href="mailto:info@angelfoundation.africa">info@angelfoundation.africa</a></span>
                    </div>
                </div>
        
                <div className="col-xs-6 col-md-3">
                    <h4 className="mb-4 pt30">Quick Links</h4>
                    <ul className="footer-links bold">
                        {links.map((item) => (
                            <li>
                                <Link className="link-primary" to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                
            </div>
          </div>
          <div className="pt20 pb-1" style={{backgroundColor:colors.angel_black}}>
            <div className="container angel-width" style={{fontSize: 12}}>
                <div className="row">
                <div className="col-lg-9 col-md-6 col-sm-6 col-xs-12" style={{textAlign:isSmallScreen ?  'center' : 'left'}}>
                    <p className="angel_white">© 2020 - {new Date().getFullYear()} <span style={{color:'#fff'}}>Angel Foundation.</span> All Rights Reserved.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pb-3" style={{textAlign:isSmallScreen ?  'center' : 'right'}}>
                    <div className="angel_white">Developed By<span><a style={{ marginLeft: 5}} className="link-light bold" alt="" href="https://ohtech.co.za" target="_blank" rel="noopener noreferrer">OpenHouse Technology</a></span></div>
                </div>
                </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer