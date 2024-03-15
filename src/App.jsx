import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'

import Home from './Pages/Home'
import Livros from './Pages/Livros'
import Sobre from './Pages/Sobre'

function App() {

  return (
    <>

    
    {/*
     <ChaptesNumber SetBookName={SetBookName} SetChapterSize={SetChapterSize}/>
     <ChapterSize chaptesNumber={chapterSize} SetBookChapter={SetBookChapter}/>
     
     {loading && <div>Carregando</div>}
     {bibleJson && <Books bookTitle={bibleJson.reference} bookChapter={bookName} bookText={bibleJson.verses}/>}
    */}

     <BrowserRouter>
       <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/livros' element={<Livros />}/>
        <Route path='/sobre' element={<Sobre />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
