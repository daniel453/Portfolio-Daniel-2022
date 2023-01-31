import React, { useEffect } from 'react'
import { projects } from './projectsArray'
import { Card } from '../../components/card/Card'

import './projects.css'

interface projectsC {
  updateThemeNav: ((theme: "light" | "dark") => void)
}

export const Projects = ({ updateThemeNav }:projectsC) => {
  window.scrollTo({
    top:0
  })

  useEffect(() => {
    updateThemeNav('light')
  },[])
  return (
    <section className='projects'>
      <h2>Proyectos</h2>
      <div className='projects__cont'>
          { projects.map(
            project => <Card 
              title={project.title}
              desc={project.desc}
              a_title={project.a_title}
              a_link={project.a_link}
              a2_title={project.a2_title}
              a2_link={project.a2_link}
              alt={project.alt}
              src={project.src}

              key={project.title}
            />
            ) 
          }
      </div>
      
    </section>
  )
}
