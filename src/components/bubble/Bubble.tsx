import React, { useRef } from 'react'
import './bubble.css'

interface bubble { 
  top?:string | undefined,
  left?:string | undefined,
  right?:string | undefined,
  bottom?:string | undefined
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed',
  background?: string
}

export const Bubble = ({ 
  top = undefined,
  left = undefined,
  right = undefined,
  bottom = undefined,
  position = 'absolute',
  background = 'rgba(209, 209, 209, 0.502)'
  }:bubble) => {
  const [isRunningAnimation,setRunningAnimation] = React.useState(true)
  const ref = useRef<HTMLElement>(null)
  
  let runNewAnimation:string | undefined

  if(!isRunningAnimation) {
    runNewAnimation = 'bubbleRoutine 2s ease-in infinite alternate'
  }

  return (
    <figure 
      ref={ref}
      className='bubble' 
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        animation: runNewAnimation,
        position: position,
        backgroundColor: background
      }}
      onAnimationEnd={() =>  setRunningAnimation(false)}></figure>
  )
}
