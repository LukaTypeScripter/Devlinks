import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './contexts/Auth.tsx'
import { LinksContextProvider } from './contexts/Links.tsx'
import { DetailsContextProvider } from './contexts/profileDetails.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LinksContextProvider>
      <DetailsContextProvider>
    <App />
    </DetailsContextProvider>
    </LinksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
