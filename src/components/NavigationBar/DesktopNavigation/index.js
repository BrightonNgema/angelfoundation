import React, { useLayoutEffect,useState } from 'react'
import Logo from "../../../assets/angelfoundation_logo_orange.png";
import Button from '../../Button';
import { Link, withRouter } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,FaTwitter } from "react-icons/fa";


function DesktopNavigation({menuList, history}) {
    const [scrollPosition, setPosition] = useState(0);

    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    

    const activeMenu = (x) => {
        const isActive = history.location.pathname === x.link
        return isActive ? "desktop-activeMenu" : ""
    }

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

    const isScrollEnough = scrollPosition > 100;
    return (
        <div className={`desktop-nav ${isScrollEnough ? "sticky-nav" : "non-sticky-nav"}`}>
            <div className="container pt-4 pb-4">
                <div className="row text-center">
                    <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center',width:'14%', marginRight:'1%'}}>
                            <FaFacebook onClick={() => onSocial('facebook')} className="social-icon" size="18px"/>
                            <FaTwitter onClick={() => onSocial('twitter')} className="social-icon" size="21px"/>
                            <AiFillInstagram onClick={() => onSocial('instagram')} className="social-icon" size="21px"/>
                    </div>
                    <div style={{display:'flex', width:'70%'}}>
                        <ul className="NavList">
                            {menuList.map((x, index) => {
                                return (
                                    <React.Fragment>
                                        <li><Link to={x.link}className={`navi-link ${isScrollEnough ? '' : "light "}`+activeMenu(x)}>{x.name}</Link></li>
                                        {index === 2 && 
                                            <li> 
                                                <Link to="/" className={`navi-link`}>
                                                    <img alt="angle foundation logo" src={Logo} style={{height:60, margin:'auto', marginTop:-5}}/>
                                                </Link> 
                                            </li>
                                        }
                                    </React.Fragment>
                                )
                            })}
                        </ul> 
                    </div>
                    <div style={{display:'flex',width:'14%',marginLeft:'1%'}}>
                        <div style={{margin:'auto 0px auto auto'}}>
                        <Button 
                            className={`no-transform ${isScrollEnough ? "" : "light"}`}
                            title="Contact Us"
                            onClick={() =>  history.push("/contact")}
                         />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DesktopNavigation)
