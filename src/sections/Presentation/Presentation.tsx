import React, { useRef } from 'react'
import { Bubble } from '../../components/bubble/Bubble'
import { Button } from '../../components/button/Button'
import { WriteMachineAnimationText } from '../../components/writeMachineAnimationText/WriteMachineAnimationText'
import { Github } from '../../icons/github'
import { Platzy } from '../../icons/platzy'
import './presentation.css'

interface presentation {
  setSection: (section: "presentation" | "about me" | "projects", ref?: React.RefObject<HTMLElement> | undefined) => void
}

export function Presentation({ setSection }:presentation) {
  const ref = useRef<HTMLElement>(null)
  const changeSection = (text:"presentation" | "about me" | "projects") => {
    if(ref.current) {
      setSection(text,ref)
    }
  }

  return (
    <section className='presentation' ref={ref}>
      <div className='presentation__text'>
        <WriteMachineAnimationText
          fontWeight='bold'
        >
          Hola!, soy
        </WriteMachineAnimationText>
        <WriteMachineAnimationText
          fontWeight='bold'
        >
          Daniel Rodriguez
        </WriteMachineAnimationText>
      </div>
      <div className='presentation__contLi'>
        <Button onClick={changeSection} parameter='about me'>Sobre mi</Button>
        <Button onClick={changeSection} parameter='projects'>Proyectos</Button>
      </div>

      <Bubble top='5%' left='5%'/>
      <Bubble top='5%' right='40%'/>
      <Bubble top='40%' right='5%'/>
      <Bubble right='35%'/>
      <Bubble bottom='10%' right='10%'/>
      <Bubble bottom='10%' left='30%'/>
      <Bubble bottom='30%' left='15%'/>
      
      <div className='contact'>
        <h2>Perfiles</h2>
        <div className='contact__links'>
          <Github fill='rgba(209, 209, 209)'/>
          <Platzy />
        </div>
        <p><b>Gmail:</b> Daniel1946203@gmail.com</p>
      </div>
    </section>
  )
}
