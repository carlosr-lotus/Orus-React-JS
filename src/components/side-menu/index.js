import {Link} from 'react-router-dom'

import './side-menu.css'

export default function SideMenu() {

    return (
        <div class="side-menu" data-js="side-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produto">Orus Tower</Link></li>
                <li><Link to="/produto">Orus Phone</Link></li>
                <li><Link to="/produto">Orus Book</Link></li>
                <li><Link to="/produto">Orus Headphone</Link></li>
            </ul>
        </div>
    )
}