import React from 'react'
import './button.css'

interface button {
  children:string,
  onClick: (text: "presentation" | "about me" | "projects") => void,
  parameter: "presentation" | "about me" | "projects"
}

export const Button = (props:button) => {

  const handleClick = () => {
    props.onClick(props.parameter)
  }
  return (
    <a 
      className='button'
      onClick={handleClick}
    >
      { props.children }
    </a>
  )
}
