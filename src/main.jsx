import { StrictMode } from 'react'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-700.css'
import { createRoot } from 'react-dom/client'
import './root.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
