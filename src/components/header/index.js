import {useState} from 'react'

import SideMenu from '../side-menu'

import './header.css'

export default function Header() {
    const [sideMenu, setSideMenu] = useState(false)
    
    const handleCLick = () => {
        sideMenu ? setSideMenu(false) : setSideMenu(<SideMenu />)
    }

    return (
        <>
        {sideMenu}
        <header>
            <div onClick={handleCLick} className="menu-icon"></div>
            <a href="./index.html"><img src={require("../../images/logo/logo-black.png").default} alt="logo" className="header-logo" /></a>
        </header>
        </>
    )
}