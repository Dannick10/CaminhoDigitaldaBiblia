import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { FetchBibleContextProvider } from './Context/FetchBibleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchBibleContextProvider>
    <App />
    </FetchBibleContextProvider>
  </React.StrictMode>,
)
