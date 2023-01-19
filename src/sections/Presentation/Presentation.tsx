import React from 'react'
import { Bubble } from '../../components/bubble/Bubble'
import { Button } from '../../components/button/Button'
import { WriteMachineAnimationText } from '../../components/writeMachineAnimationText/WriteMachineAnimationText'
import './presentation.css'

interface presentation {
  setSection: React.Dispatch<React.SetStateAction<"presentation" | "about me" | "projects">>
}

export function Presentation({ setSection }:presentation) {

  const changeSection = (text:"presentation" | "about me" | "projects") => {
    setSection(text)
  }

  return (
    <section className='presentation'>
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

    </section>
  )
}
