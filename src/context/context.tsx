import React, { useState } from 'react'
import { useChangeSection } from '../hooks/useChangeSection'

export const Context = React.createContext<{
  section?: "presentation" | "about me" | "projects"
  themeNav?: 'light' | 'dark',
  updateThemeNav?: (theme: 'light' | 'dark') => void,
  changeSection?: (section: "presentation" | "about me" | "projects", ref?: React.RefObject<HTMLElement> | undefined) => void
}>({})

export const ContextProvider = (props:{children:React.ReactNode}) => {
  const [themeNav,setThemeNav] = useState<'light' | 'dark'>('dark')

  const {
    section,
    changeSection
  } = useChangeSection()

  const updateThemeNav = (theme:'light' | 'dark') => {
    setThemeNav(theme)
  }

  return (
    <Context.Provider value={{
      themeNav,
      section,
      changeSection,
      updateThemeNav,
    }}>
      { props.children }
    </Context.Provider>
  )
}
