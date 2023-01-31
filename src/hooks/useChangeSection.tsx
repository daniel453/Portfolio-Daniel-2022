import React, { useState } from 'react'

export const useChangeSection = () => {
  const [section,setSection] = useState<'presentation' | 'about me' | 'projects'>('presentation')

  const changeSection = (
    section: "presentation" | "about me" | "projects",
    ref?: React.RefObject<HTMLElement>,
    ) => {
    if(ref?.current) {
      ref.current.style.animation = 'disappearSection 1s'
      setTimeout(() => {
        setSection(section)
      },990)
    } else {
      setSection(section)
    }
  }

  return {
    section,
    changeSection
  }
}