import React from 'react'
import './AboutStyles.css'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="content">
                    <h2><span>O nás</span> v skratke</h2>
                    <p>PCKlub tvorí skupina študentov bývajúcich na internátoch na ulici Jedlíková, Boženy Nemcovej, Ferka Urbánka a Rampová, ktorí sa zaujímajú o technológie budovania sietí, spravovania webového obsahu a konfigurácie sieťových prvkov na internátoch Technickej Univerzity v Košiciach.</p>                    <div>
                    <Link className='priority' to='/about'>Dozvedieť sa viac</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
