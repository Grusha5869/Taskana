import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/global.css"
import App from './App.jsx'
import { ThemeProvider } from '@/context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
