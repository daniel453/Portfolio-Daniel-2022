import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { useChangeSection } from '../../hooks/useChangeSection'
import './nextSection.css'

interface next {
  children: string,
  nextSection: { section:"presentation" | "about me" | "projects",nowSectionRef:React.RefObject<HTMLElement> },
  top?: string,
  bottom?: string,
  left?:string,
  rigth?:string
}

const NextSection = (props:next) => {
  const {
    changeSection
  } = useContext(Context)
  const setSection = () => {
    if(changeSection) {
      changeSection(props.nextSection.section, props.nextSection.nowSectionRef)
    }
  }
  return (
    <div 
      className='next' 
      onClick={setSection}
    >
      <p>{ props.children }</p>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#333333' height="48" width="48">
          <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
        </svg>
      </figure>
    </div>
  )
}

export {NextSection}
