import React from 'react'
import styles from './controls.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeletedDocument } from '../hooks/useDeleteDocument'
import { useFetchBible } from '../hooks/useFetchBible'

const Controls = ({document,idcontrol,nameBook,chapterBook}) => {
    

  const {bibleJson,bookName,SetBookName,bookChapter,SetBookChapter,loading:bookLoading,chapterSize,SetChapterSize} = useFetchBible()


    const [viewMenu, SetViewMenu] = useState(false)
    const { deleteDocument } = useDeletedDocument(document)

    if(viewMenu){
     setTimeout(()=>{
          SetViewMenu(false)
        },2000)
      }
  const navigate = useNavigate()
  
   const handleBook = (e) => {
        SetBookName(nameBook)
        SetBookChapter(chapterBook)

        navigate('/livros')
    }
    

  return (
    <div className={styles.controls}>
    <span onClick={() => SetViewMenu(!viewMenu?true:false)}>
        <i className="fa-solid fa-ellipsis"></i>
     </span>

        {viewMenu && (
            <div className={styles.option}>
            <div onClick={() => deleteDocument(idcontrol)}><i className="fa-solid fa-trash"></i> <p>EXCLUIR</p></div>
            <div onClick={() => handleBook()}><i className="fa-solid fa-book"></i> <p>LIVRO</p></div>
            </div>          
        )}       
    </div>
  )
}

export default Controls