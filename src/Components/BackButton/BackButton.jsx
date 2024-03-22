import React from 'react'
import { ReactComponent as Arrow } from '../../Imgs/box-arrow-left.svg'
import { Link } from 'react-router-dom'

const BackButton = () => {
return (
    <section>
        <Link to='/' className="BackClass">
            <Arrow alt='imagen para volver al inicio' />
            <span> Volver</span>
        </Link>
    </section>
)
}

export default BackButton