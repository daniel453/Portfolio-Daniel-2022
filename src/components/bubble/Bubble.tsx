import React from 'react'
import './bubble.css'

interface bubble { 
  top?:string | undefined,
  left?:string | undefined,
  right?:string | undefined,
  bottom?:string | undefined
}

export const Bubble = ({ top = undefined,left = undefined,right = undefined,bottom = undefined}:bubble) => {
  const [isRunningAnimation,setRunningAnimation] = React.useState(true)
  let runNewAnimation:string | undefined
  if(!isRunningAnimation) {
    runNewAnimation = 'bubbleRoutine 2s ease-in infinite alternate'
  }
  return (
    <figure 
      className='bubble' 
      style={{
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      animation: runNewAnimation
      }}
      onAnimationEnd={() =>  setRunningAnimation(false)}></figure>
  )
}
