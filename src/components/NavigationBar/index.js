import React from 'react'
import { useWindowSize } from '../../utils/useWindow';
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'
import { isMobile } from 'react-device-detect';

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
    if(useWindowSize().width < 767 || isMobile){
        return <MobileNavigation menuList={menuList}/>
    }
    return <DesktopNavigation menuList={menuList} />
}

export default NavigationBar
