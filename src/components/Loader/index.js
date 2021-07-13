import React from 'react'
import { BarLoader } from 'react-spinners'
import { colors } from '../../utils/theme'
import Logo from "../../assets/angelfoundation_logo_white.png";

const Loader = () => {
    return (
        <div className="vh-100" style={{backgroundColor:colors.angel_black,display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
            <img alt="angle foundation logo" src={Logo} style={{height:80, marginBottom:30}}/>
            <BarLoader width="30%" height={6} color={colors.angel_orange}/>
            <p className="mt-3" style={{color:colors.angel_white, fontSize:18}}>Loading</p>
        </div>
    )
}

export default Loader
