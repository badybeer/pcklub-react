import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1 className='blue'>Máte problém s pripomením?</h1>
                    <p>V prípade že máte problém s pripojením do internátnej sieťe pomocou káblového pripojenia alebo problém s pripojením na bezdrotovú sieť INTRAK</p>
                    <Link className='priority' to='/instructions'>Návody</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
