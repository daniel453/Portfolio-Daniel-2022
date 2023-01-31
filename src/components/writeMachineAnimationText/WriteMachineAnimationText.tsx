import React, { LegacyRef, useEffect, useRef } from 'react'
import { useIntersectionApi } from '../../hooks/useIntersectionAPI'
import './writeMachine.css'

interface writeMachine {
  children: string,
  fontWeight?: string
}

export const WriteMachineAnimationText = (props:writeMachine) => {
  const textLength = props.children.length
  const ref = useRef<HTMLParagraphElement | null>(null)
  const isVisible = useIntersectionApi(ref,{})
  if(isVisible && ref.current) {
    ref.current.style.animation = `typing 2s steps(${textLength}),blink .5s infinite step-end alternate`
  }
  return (
    <p 
      className='p'
      ref={ref}
      style={{
        fontWeight: props.fontWeight,
        width: `${textLength}ch`,
      }}
    >
      {props.children}
    </p>
  )
}
