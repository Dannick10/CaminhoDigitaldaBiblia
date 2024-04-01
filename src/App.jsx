import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'

import { AuthProvider } from './Context/AuthContext'

import Home from './Pages/Home'
import Livros from './Pages/Livros'
import Sobre from './Pages/Sobre'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      <AuthProvider>
     <BrowserRouter>
       <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/livros' element={<Livros />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
