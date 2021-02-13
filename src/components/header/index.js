import './header.css'

export default function Header() {
    return (
        <header>
            <div className="menu-icon"></div>
            <a href="./index.html"><img src={require("../../images/logo/logo-black.png").default} alt="logo" className="header-logo" /></a>
        </header>
    )
}