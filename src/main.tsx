import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./App.css"
import {ContextProvider} from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
)
