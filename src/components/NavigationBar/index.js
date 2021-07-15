import React from 'react'
import { useWindowSize } from '../../utils/useWindow';
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const menuList = [
    {
        name:"Home",
        link:"/"
    },
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
]
function NavigationBar() {
    const {width,height, isMobile} = useWindowSize()
    console.log("isMobile", isMobile)
    if(width < 769 || height < 800){
        return <MobileNavigation menuList={menuList}/>
    }
    return <DesktopNavigation menuList={menuList} />
}

export default NavigationBar
