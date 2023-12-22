import React from 'react'
import './function.css';

function Post(props) {
  return (
    <div className = "container"> 
      <h1 className = "p">{props.title}</h1>
    <p className = "label">{props.content}</p>
    </div>
  )
}

export default Post