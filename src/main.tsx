import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './contexts/Auth.tsx'
import { LinksContextProvider } from './contexts/Links.tsx'
import { DetailsContextProvider } from './contexts/profileDetails.tsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LinksContextProvider>
      <DetailsContextProvider>
      <DndProvider backend={HTML5Backend}>
    <App />
    </DndProvider>
    </DetailsContextProvider>
    </LinksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
