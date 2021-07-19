import React from 'react'
import { useWindowSize } from '../../utils/useWindow';
import MobileNavigation from './MobileNavigation'
import DesktopNavigation from './DesktopNavigation'

const MobileMenu = {
    name:"Home",
    link:"/",
    subMenu:[]
}
const menuList = [
    {
        name:"About Us",
        link:"/about",
        subMenu:[]
    },
    {
        name:"Our Approach",
        link:"/our-approach",
        subMenu:[
            {
                name:"How You Can Help?",
                link:"/our-approach"
            },
            
        ]
    },
    {
        name:"Our Goals",
        link:"/our-goals",
        subMenu:[]
    },
    {
        name:"Partners",
        link:"/partners",
        subMenu:[]
    }
]
function NavigationBar() {
    const {width} = useWindowSize()
    if(width < 769){
        return <MobileNavigation menuList={[MobileMenu,...menuList]} />
    }
    return <DesktopNavigation menuList={menuList} />
}

export default NavigationBar
