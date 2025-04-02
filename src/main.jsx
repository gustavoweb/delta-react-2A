import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Delta from './components/Delta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Delta />
  </StrictMode>,
)
