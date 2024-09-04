import React, { useState } from 'react'
import Button from './Button'

const Card = ({title , description , price}) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Rs: {price}</p>
            <Button title="click" bgcolor="purple" color="white"/>
        </div>
    )
}

export default Card