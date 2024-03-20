import { useState,useEffect } from 'react'
import styles from './Livros.module.css'

import Books from '../components/Books.modules'
import ChaptesNumber from '../components/ChaptesNumber'
import ChapterSize from '../components/ChapterSize'
import { useFetchBible } from '../hooks/useFetchBible'

const Livros = () => {

  const {bibleJson,bookName,SetBookName,bookChapter,SetBookChapter,loading,chapterSize,SetChapterSize} = useFetchBible()
  console.log(bookName)
  return (
    <main className={styles.section_books}>
         
    
       <section className={styles.chaptesnumber}>
         <ChaptesNumber bookname={bookName} SetBookName={SetBookName} SetChapterSize={SetChapterSize} SetBookChapter={SetBookChapter}/>
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