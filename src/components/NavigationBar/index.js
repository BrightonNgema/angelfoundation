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
        name:"About",
        link:"/about"
    },
    {
        name:"Projects",
        link:"/projects"
    },
    {
        name:"Volunteer",
        link:"/volunteer"
    },
    {
        name:"News",
        link:"/news"
    },
    {
        name:"Contact",
        link:"/contact"
    }
]
function NavigationBar() {

    if(useWindowSize().width < 767){
        return <MobileNavigation menuList={menuList}/>
    }
    return <DesktopNavigation menuList={menuList} />
}

export default NavigationBar
