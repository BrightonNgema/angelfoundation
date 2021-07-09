import React, { useState } from "react"
import Logo from "../../../assets/angelfoundation_logo_orange.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../../../utils/theme";
import { Link, withRouter } from "react-router-dom";

const MobileNavigation = ({menuList, history}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const activeMenu = (x) => {
        const isActive = history.location.pathname === x.link
        return isActive ? "activeMenu" : ""
    }
    return (
        <div style={{top:0,width:'100%', position:'fixed',}}>
            <div style={{ backgroundColor:colors.angel_white,boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.4)"}}>
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-10">
                            <Link to="/" onClick={() =>  setToggleMenu(false)}>
                                <img alt="angle foundation logo" src={Logo} style={{height:50, margin:'auto', marginTop:-5}}/>
                            </Link>
                        </div>
                        <div className="col-auto mt-auto mb-auto ml-auto">
                        <div className="mx-auto">
                            {!toggleMenu && <FaBars size="30px" onClick={() =>  setToggleMenu(true)}/>}
                            {toggleMenu && <AiOutlineClose size="30px" onClick={() =>  setToggleMenu(false)}/>}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown-menu-list" style={{marginLeft:!toggleMenu? -window.innerWidth : 0}}>
                {menuList.map((x, index) => (
                    <div style={{padding:"12px 20px"}} className={activeMenu(x)} onClick={() =>  history.push(x.link) && setToggleMenu(false)}>
                        <Link onClick={() =>  setToggleMenu(false)} to={x.link} className="navi-link">{x.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default withRouter(MobileNavigation)
