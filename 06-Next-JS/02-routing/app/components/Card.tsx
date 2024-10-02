import React from 'react'

interface Props {
    title?: string
    description?: string
}

const Card = (props: Props) => {
    return (
        <>
            <h1>Card {props.title}</h1>
            <p>{props.description ? props.description : 'lorem ipsum'}</p>
        </>
    )
}

export default Card