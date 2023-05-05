import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

const theme: Theme = {
  colors: {
    primary: '#0070f3',
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
