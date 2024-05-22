import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import { AuthProvider } from './Context/AuthContext'

import Home from './Pages/Home'
import Livros from './Pages/Livros'
import Sobre from './Pages/Sobre'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Perfil from './Pages/perfil/Perfil'
import Feed from './Pages/Blog/Blog'
import Mypost from './Pages/Mypost/Mypost'
import FavoriteBook from './Pages/FavoriteBook/FavoriteBook'
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword'

function App() {
  
  const [user,Setuser] = useState(undefined)
  const {auth} = useAuthentication()
  
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      Setuser(user)
    })

  },[auth])

  if(loadingUser) {
    return <div className='loadingBooks' style={{top:'0', height:'100vh'}}></div>
  }

  return (
    <>
      <AuthProvider value={{user}}>
     <BrowserRouter>
       <Header/> 
             <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/livros' element={<Livros />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
        <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
        <Route path='/forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/perfil' element={user ? <Perfil/>: <Navigate to="/register"/>}/>
        <Route path='/feed' element={user ? <Feed/>: <Navigate to="/register"/>}/>
        <Route path='/mypost' element={user ? <Mypost/>: <Navigate to="/register"/>}/>
        <Route path='/favoritebook' element={user ? <FavoriteBook/>:<Navigate to="/register"/>}/>
             </Routes>

     </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
