import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const cont = document.getElementById('root')
if(cont) {
  const root = createRoot(cont)
  root.render(<App/>)
}
