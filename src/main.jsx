import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import FuncProvider from './provider/FuncProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FuncProvider><RouterProvider router={router} /></FuncProvider>
  </StrictMode>,
)
