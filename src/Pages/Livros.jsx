import { useState,useEffect } from 'react'
import styles from './Livros.module.css'

import Books from '../components/Books.modules'
import ChaptesNumber from '../components/ChaptesNumber'
import ChapterSize from '../components/ChapterSize'

const Livros = () => {

  const [bibleJson,SetBibleJson] = useState([])

    const [bookName,SetBookName] = useState('')
    const [bookChapter,SetBookChapter] = useState('1')
    const [translation,SetTranslation] = useState('almeida')
    const [loading,Setloading] = useState(false)
  
    const [chapterSize,SetChapterSize] = useState()
  
    
    useEffect(()=>{
  
      try{
  
      const fetchData = async () => {
      Setloading(true)
      const bookJson = await fetch(`https://bible-api.com/${bookName}:${bookChapter}?translation=${translation}`)
      const data = await bookJson.json()
  
  
  
      SetBibleJson(data)
        Setloading(false)
      }
      
      fetchData()
    } catch{
      console.log('error')
    }
  
    },[bookName, bookChapter, translation, chapterSize])

  return (
    <main className={styles.section_books}>
         
    
       <section className={styles.chaptesnumber}>
         <ChaptesNumber SetBookName={SetBookName} SetChapterSize={SetChapterSize} SetBookChapter={SetBookChapter}/>
       </section> 

       <section className={styles.book}>
       <aside className={styles.bookRead}>
         {loading && <div className={styles.loadingBooks}></div>}
         {bibleJson && <Books bookTitle={bibleJson.reference} bookChapter={bookName} bookText={bibleJson.verses}/>}
       </aside>
          <aside className={styles.bookNumber}>
          {!loading &&(
            <ChapterSize chaptesNumber={chapterSize} SetBookChapter={SetBookChapter} bookchapter={bookChapter}/>
            )}
          </aside>
       </section>
   
    </main>
  )
}

export default Livros