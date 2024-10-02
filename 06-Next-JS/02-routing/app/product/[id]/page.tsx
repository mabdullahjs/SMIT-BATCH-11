import React from 'react'

const SingleUser = (props: { params: { id: string } }) => {
    return (
        <>
            <div>SingleUser {props.params.id}</div>
        </>
    )
}

export default SingleUser