import React from 'react'
import './nav.css'

interface nav {
  setSection: React.Dispatch<React.SetStateAction<"presentation" | "about me" | "projects">>
}

export const Nav = ({ setSection }:nav) => {
  return (
    <header>
      <nav className='nav'>
        <h3>Portafolio Daniel Rodriguez</h3>
        <ul className='nav__contLinks'>
          <li onClick={() => setSection('presentation')}>Inicio</li>
          <li onClick={() => setSection('about me')}>Sobre mi</li>
          <li onClick={() => setSection('projects')}>Proyectos</li>
        </ul>
      </nav>
    </header>
  )
}
