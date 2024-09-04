import React from 'react'

const Button = ({title , bgcolor , color}) => {
    return (
        <>
            <button className='btn' style={{
                backgroundColor: bgcolor,
                color: color
            }}>{title}</button>
        </>
    )
}

export default Button