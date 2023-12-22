import React from 'react'

function FunctionPage(props) {
  return (
    <div>
        <h1>{props.employeename}</h1>
        <h3>{props.employeeposition}</h3>
        <p>{props.company}</p>
        <button type = "button" class = "btn-warning">Edit</button>
    </div>
  )
}

export default FunctionPage