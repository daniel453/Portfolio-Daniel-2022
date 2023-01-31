import React, { useContext } from 'react'
import { Presentation } from './sections/Presentation/Presentation'
import './index.css'

import { Lyout } from './components/lyout/Lyout'
import { Context } from './context/context'

export const App = () => {
  const {
    section,
    changeSection,
    updateThemeNav,
    themeNav,
  } = useContext(Context)

  if(section && changeSection && updateThemeNav && themeNav) {
    // render
    if(section !== 'presentation') {
      return (
        <Lyout 
          section={section} 
          setSection={changeSection} 
          updateThemeNav={updateThemeNav}
          themeNav={themeNav}
        />
      )
    }
    return (
      <>
        <main>
          <Presentation setSection={changeSection}/>
        </main>
      </>
    )
  }
  return null
}
