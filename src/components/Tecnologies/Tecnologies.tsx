import React from 'react'
import './tecnologies.css'
import { NextSection } from '../nextSection/nextSection'
import { Tecnologies_p } from '../tecnologies_tec/Tecnologies'
import { WriteMachineAnimationText } from '../writeMachineAnimationText/WriteMachineAnimationText'
import { Bubble } from '../bubble/Bubble'

export interface refProp { 
  divRef: React.MutableRefObject<HTMLDivElement | null>
  sectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Tecnologies = ({ divRef, sectionRef }:refProp) => {
  return (
    <div className='tecnologies' ref={divRef}>
      <Bubble top='100px' left='55px' background='rgba(51, 51, 51, 0.535)'/>
      <Bubble top='85px' right='20px'  background='rgba(51, 51, 51, 0.535)'/>
      <Bubble bottom='25px' left='35px' background='rgba(51, 51, 51, 0.535)'/> 
      
      <WriteMachineAnimationText>Tecnologias</WriteMachineAnimationText>
      <Tecnologies_p>
        <p>Html</p>
        <p>Css</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Git</p>
        <p>Redux</p>
        <p>Angular</p>
        <p>TailwindCss</p>
        <p>WebPack</p>
      </Tecnologies_p>
      <NextSection 
        nextSection={{
          section: 'projects',
          nowSectionRef: sectionRef
        }}>Proyectos</NextSection>
    </div>
  )
}
