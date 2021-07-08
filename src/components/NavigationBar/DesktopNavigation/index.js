import React, { useLayoutEffect,useState } from 'react'
import Logo from "../../../assets/angelfoundation_logo_orange.png";
import Button from '../../Button';
import { Link } from 'react-router-dom'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook,FaTwitter } from "react-icons/fa";


function DesktopNavigation({menuList}) {
    const [scrollPosition, setPosition] = useState(0);
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    
    const isTop = scrollPosition > 100 ? {top:0,background:'#fff',boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.4)"} : {color:'#fff', top:20};

 
    return (
        <div style={{width:'100%', position:'fixed', ...isTop, transition:'0.6s'}}>
            <div className="container pt-3 pb-4">
                <div className="row text-center">
                    <div style={{display:'flex',width:'14%', marginRight:'1%'}}>
                        <div style={{margin:'auto 0px'}}>
                            <FaFacebook size="18px"  style={{marginRight:20}}/>
                            <FaTwitter size="21px"  style={{marginRight:20}}/>
                            <AiFillInstagram size="21px"/>
                        </div>
                    </div>
                    <div style={{display:'flex', width:'70%'}}>
                        <ul className="NavList">
                            {menuList.map((x, index) => {
                                return (
                                    <React.Fragment>
                                        <li><Link to={x.link}className={`navi-link ${scrollPosition < 100 ? 'light' : ""}`}>{x.name}</Link></li>
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
                            className={scrollPosition > 100 ? "" : "light"}
                            title="Contact Us"
                         />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopNavigation
