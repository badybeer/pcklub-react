import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { FaNetworkWired } from 'react-icons/fa'
import './FooterStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <FaNetworkWired className='icon' />
                        <h2><span>© 2022</span> PCKlub</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Informácie</h3>
                    </div>
                    <div className="col">
                        <h3>Prevádzkový poriadok</h3>
                    </div>
                    <div className="col">
                        <h3>Zapisovanie na sieť </h3>
                    </div>
                    <div className="col">
                        <h3>Služby</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
