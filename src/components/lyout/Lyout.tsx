import React from 'react'
import { AboutMe } from '../../sections/about-me/AboutMe'
import { Projects } from '../../sections/proyects/Projects'
import { Nav } from '../navigation/Nav'

interface lyout {
  section: "presentation" | "about me" | "projects",
  setSection: (section: "presentation" | "about me" | "projects", ref?: React.MutableRefObject<HTMLElement>) => void,
  updateThemeNav: ((theme: "light" | "dark") => void),
  themeNav: "light" | "dark"
}

export const Lyout = ({ section, setSection, updateThemeNav, themeNav }:lyout) => {
  let Section:React.ReactNode | null = null

  if(section === 'about me') {
    Section = <AboutMe updateThemeNav={updateThemeNav}/>
  } else if(section === 'projects'){
    Section = <Projects updateThemeNav={updateThemeNav}/>
  }

  return (
    <>
      <Nav setSection={setSection} themeNav={themeNav}/>
        <main>         
          { Section }
        </main>
    </>
  )
}
