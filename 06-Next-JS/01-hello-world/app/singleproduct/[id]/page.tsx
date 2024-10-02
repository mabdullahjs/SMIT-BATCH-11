import React from 'react'

const DynamicRoute = (props: {params: {id:number}}) => {
  return (
    <div>DynamicRoute {props.params.id}</div>
  )
}

export default DynamicRoute