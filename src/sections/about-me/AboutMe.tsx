import React, { useContext, useEffect, useRef } from 'react'
import { Bubble } from '../../components/bubble/Bubble'
import { Tecnologies } from '../../components/Tecnologies/Tecnologies'
import { WriteMachineAnimationText } from '../../components/writeMachineAnimationText/WriteMachineAnimationText'
import { useIntersectionApi } from '../../hooks/useIntersectionAPI'
import './about-me.css'

interface aboutMe {
  updateThemeNav: ((theme: "light" | "dark") => void)
}

export const AboutMe = ({ updateThemeNav }:aboutMe) => {
  const divRef = useRef(null)
  const sectionRef = useRef(null)
  const isVisible = useIntersectionApi(divRef,{
    root: null,
    rootMargin: "10px",
    threshold: .9,
  })
  
  useEffect(() => {
    updateThemeNav('dark')
    if(divRef.current) {
      if(isVisible) {
        updateThemeNav('light')
      }else {
        updateThemeNav('dark')
      }
    } 

  },[isVisible])

  
  return (
    <section className='about-me' ref={sectionRef}>
      <Bubble top='110px' left='10px'/>
      <Bubble bottom='100px' left='40px'/>
      <Bubble bottom='130px' right='20px'/>
      <div className='about-me__description'>
        <WriteMachineAnimationText>Sobre mi.</WriteMachineAnimationText>
        <p className='about-me__description__p'>Soy una persona proactiva, organizada, responsable, dinámica, puntual que valora el trabajo en equipo que está dispuesta a aprender cosas nuevas de los demás con el fin de alcanzar las metas organizacionales.
        <br/><br />
        Cuento con la virtud de ser autónomo, asegurándome de siempre entregar las tareas a tiempo y con su respectiva calidad.
        </p>
      </div>
      <Tecnologies divRef={divRef} sectionRef={sectionRef}/>
    </section>
  )
}

