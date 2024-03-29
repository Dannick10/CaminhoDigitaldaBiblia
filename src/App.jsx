import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'

import Home from './Pages/Home'
import Livros from './Pages/Livros'
import Sobre from './Pages/Sobre'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>

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
    </>
  )
}

export default App
