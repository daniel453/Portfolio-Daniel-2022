import React, { useRef, useState } from 'react'
import './nav.css'

import { Menu } from '../../icons/menu'
import { Close } from '../../icons/close'


interface nav {
  setSection: (section: "presentation" | "about me" | "projects", ref?: React.MutableRefObject<HTMLElement>) => void,
  themeNav: "light" | "dark"
}

export const Nav = ({ setSection,themeNav }:nav) => {
  const [menuMobile,setMenuMobile] = useState<boolean>(false)
  const ref = useRef<HTMLHtmlElement | null>(null)
  let modalColor = ''
  let iconsColor = ''

  if(ref.current && themeNav === 'light') {
    ref.current.classList.add('light')
    modalColor = '#D9D9D9'
  } else if (ref.current && themeNav === 'dark'){
    ref.current.classList.remove('light')
    modalColor = '#333'
  }
  
  const toggleModal = () => {
    setMenuMobile(!menuMobile)
  }
  const changeSectionMobile = (section: "presentation" | "about me" | "projects") => {
    setSection(section)
    setMenuMobile(false)
  }
  return (
    <header>
      <nav className='nav' ref={ref}>
        <h3>Portafolio Daniel Rodriguez</h3>
        <ul className='nav__contLinks'>
          <li onClick={() => setSection('presentation')}>Inicio</li>
          <li onClick={() => setSection('about me')}>Sobre mi</li>
          <li onClick={() => setSection('projects')}>Proyectos</li>
        </ul>
        <div className='menuMobile'>
          {
            menuMobile
            ? <Close onClick={toggleModal} fill={themeNav === 'light' ? '#333333' : '#D9D9D9'}/>
            : <Menu  onClick={toggleModal} fill={themeNav === 'light' ? '#333333' : '#D9D9D9'}/>
          }
          <ul 
            className={`menuMobile__nav ${menuMobile ? 'active': ''}`} 
            style={{backgroundColor: modalColor}}>
            <li onClick={() => changeSectionMobile('presentation')}>Inicio</li>
            <li onClick={() => changeSectionMobile('about me')}>Sobre mi</li>
            <li onClick={() => changeSectionMobile('projects')}>Proyectos</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
