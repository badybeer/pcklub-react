import React from 'react'
import {Link} from 'react-router-dom'
import './NetworkStyles.css'

const Network = () => {
    return (
        <div className='network'>
            <div className="container">
                <div className="content">
                    <h2><span>O sieti</span></h2>
                    <p>Pozrite si prevádzkový poriadok siete</p>
                    <Link className='priority' to='/instructions'>Prevádzkový poriadok</Link>
                    <p>Alebo viac informácii o samotnej sieti</p>
                    <Link className='priority' to='/instructions'>O sieti</Link>
                </div>
            </div>
        </div>
    )
}

export default Network
