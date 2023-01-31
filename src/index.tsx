import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ContextProvider } from './context/context'

const cont = document.getElementById('root')
if(cont) {
  const root = createRoot(cont)
  root.render(
    <ContextProvider>
      <App/>
    </ContextProvider>
  )
}
