import React from 'react'
import './writeMachine.css'

interface writeMachine {
  children: string,
  fontWeight?: string
}

export const WriteMachineAnimationText = (props:writeMachine) => {
  const textLength = props.children.length
  return (
    <p 
      className='p'
      style={{
        fontWeight: props.fontWeight,
        width: `${textLength}ch`,
        animation: `typing 2s steps(${textLength}),blink .5s infinite step-end alternate`
      }}
    >
      {props.children}
    </p>
  )
}
