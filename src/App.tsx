import React, { useState } from 'react'
import { Presentation } from './sections/Presentation/Presentation'
import './index.css'
import { AboutMe } from './sections/about-me/AboutMe'
import { Nav } from './components/navigation/Nav'

export const App = () => {
  const [section,setSection] = useState<'presentation' | 'about me' | 'projects'>('presentation')
  if(section === 'about me') {
    return (
      <>
        <main>         
          <Nav setSection={setSection}/>
          <AboutMe/>
        </main>
      </>
    )
  }
  return (
    <>
      <main>
        <Presentation setSection={setSection}/>
      </main>
    </>
  )
}
