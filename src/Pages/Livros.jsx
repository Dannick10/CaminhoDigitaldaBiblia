import { useState,useRef } from 'react'
import styles from './Livros.module.css'

import Books from '../components/Books.modules'
import ChaptesNumber from '../components/ChaptesNumber'
import ChapterSize from '../components/ChapterSize'
import { useFetchBible } from '../hooks/useFetchBible'

const Livros = () => {

  const checkRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const [chapterclose,SetChapterClose] = useState(false)

  const closeChapter = () =>{
   if(chapterclose){
    SetChapterClose(false)
   } else {
    SetChapterClose(true)
   }
  }

  const {bibleJson,bookName,SetBookName,bookChapter,SetBookChapter,loading,chapterSize,SetChapterSize} = useFetchBible()
    
  return (
    <main className={styles.section_books}>
         
    
       <section className={styles.chaptesnumber} style={checked ? {position:'fixed'}:{}}>
         <ChaptesNumber bookname={bookName} SetBookName={SetBookName} SetChapterSize={SetChapterSize} SetBookChapter={SetBookChapter} checked={checked} setChecked={setChecked}/>
         <div className={styles.btnexpadin}>
         <span>{!checked?(<p>Expandir</p>):(<p>Fechar</p>)}</span>
         <input 
          ref={checkRef} 
          type="checkbox" 
          onChange={(e) => setChecked(e.target.checked)}
         />
         </div>
       </section> 

       <section className={styles.book}>
       <aside className={styles.bookRead}>
         {loading && <div className={styles.loadingBooks}></div>}

         {bibleJson && <Books bookTitle={bibleJson.reference} bookChapter={bookName} bookText={bibleJson.verses}/>}
        {!bookName == '' &&(<>

            <div className={styles.controls}>

              <div className={styles.left} style={bookChapter==1 ?{opacity:'0.3', pointerEvents:'none'}:{opacity:'1'}}><i className="fa-solid fa-chevron-left" onClick={()=>{SetBookChapter(bookChapter - 1),scrollTo(0,0)}}></i></div>
         
              <div>{bookChapter}</div>
            <div className={styles.right} style={chapterSize == bookChapter?{opacity:'0.3',pointerEvents:'none'}:{opacity:'1'}}><i className="fa-solid fa-chevron-right" onClick={()=>{SetBookChapter(bookChapter + 1), scrollTo(0,0)}}></i></div>

         </div>
          </>)}
        
       </aside>
       </section>


      <section style={chapterclose?{position: 'fixed',bottom:'0', width: '100vw'}:{position: 'relative'}}>
     
         {!bookName == '' && (<>
         <div className={styles.showchapter}>
           <div onClick={closeChapter}>
             <i className="fa-solid fa-book"></i>
             <p>Mostrar capitulos</p>
           </div>
           </div>
         </>)}
     
             {chapterclose && <>
         <aside className={styles.bookNumber}>
             {!loading &&(
               <ChapterSize chaptesNumber={chapterSize} SetBookChapter={SetBookChapter} bookchapter={bookChapter}/>
               )}
         </aside>
              </>}
        </section>

    </main>
  )
}

export default Livros