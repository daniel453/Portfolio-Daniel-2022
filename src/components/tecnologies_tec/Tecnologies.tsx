import React, {ReactHTMLElement, ReactNode, useRef} from 'react'
import './tecnologies.css'
import { useIntersectionApi } from '../../hooks/useIntersectionAPI'

interface tecnologies_p {
  children: ReactNode
}

export const Tecnologies_p = (props:tecnologies_p) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useIntersectionApi(ref,{})
  if(isVisible && ref.current) {
    ref.current.classList.add('show')
  }
  return (
    <div 
      className='tecnologies__tec'
      ref={ref}
    >
      {props.children}
    </div>
  )
}
