import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterCustome from './router'
import { HelmetProvider } from 'react-helmet-async'
import UserProvider from './contexts/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <HelmetProvider>
        <RouterCustome />
      </HelmetProvider>
    </UserProvider>
  </StrictMode>,
)
