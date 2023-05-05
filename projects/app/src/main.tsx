import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme, ThemeProvider } from '@emotion/react'

const theme: Theme = {
  colors: {
    primary: '#0070f3',
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
