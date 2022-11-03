import React, { useState } from 'react'
import { FaBars, FaNetworkWired, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <FaNetworkWired className='icon' />
                    <h1><Link to='/'>PCKlub</Link></h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className='priority' to='/instructions'>Návody</Link></li>
                    <li><Link to='/services'>Služby</Link> </li>
                    <li><Link to='/network'>Sieť</Link></li>
                    <li><Link to='/about'>PCKlub</Link></li>
                    <li><a className='priority' href='https://userpanel.pcklub.sk/'>Userpanel</a></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
