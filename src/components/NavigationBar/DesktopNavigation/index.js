import React, { useLayoutEffect,useState } from 'react'
import Logo from "../../../assets/angelfoundation_logo_orange.png";
import { Link, withRouter } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,FaTwitter } from "react-icons/fa";
import { colors } from '../../../utils/theme';


function DesktopNavigation({menuList, history}) {
    const [scrollPosition, setPosition] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);

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
    const isShow = (linkName) => {
        return toggleMenu === linkName ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0};
    }
    return (
        <div className={`desktop-nav ${isScrollEnough ? "sticky-nav" : "non-sticky-nav"}`} onMouseLeave={() =>  setToggleMenu(false)}>
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
                                        <li style={{position:'relative'}}>
                                            <Link onMouseEnter={() =>  setToggleMenu(x.name)} to={x.link}className={`navi-link ${isScrollEnough ? '' : "light "}`+activeMenu(x)}>{x.name}</Link>
                                                <div style={{...isShow(x.name), marginTop:20, position:'fixed',textAlign:'left',transition:"visibility 0s, opacity 0.2s linear"}}>
                                                    {x.subMenu.map((sub) =>  
                                                    <div className={activeMenu(x)} onClick={() => setToggleMenu("")} style={{padding:"10px 20px", backgroundColor:colors.angel_black}}>
                                                        <Link onClick={() =>  setToggleMenu("")} to={{ pathname:x.link, query: { scrollId:"how-can-you-help" } }} className="navi-link light">{sub.name}</Link>
                                                    </div>)}
                                                </div>
                                            
                                        </li>
                                        
                                        {index === 1 && 
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
                        {/* <div style={{margin:'auto 0px auto auto'}}>
                            <Button 
                                className={`no-transform ${isScrollEnough ? "" : "light"}`}
                                title="Contact Us"
                                onClick={() =>  history.push("/contact")}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(DesktopNavigation)
