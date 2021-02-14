import {useState} from 'react'
import {Link} from 'react-router-dom'

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
            <Link to="/"><img src={require("../../images/logo/logo-black.png").default} alt="logo" className="header-logo" /></Link>
        </header>
        </>
    )
}