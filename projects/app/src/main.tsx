import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { darkTheme } from './themes/dark.theme.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
