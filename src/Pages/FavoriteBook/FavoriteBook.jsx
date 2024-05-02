import React from 'react'
import styles from './FavoriteBook.module.css'
import { useState,useRef } from 'react'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../Context/AuthContext'


const FavoriteBook = () => {
    
    const { user } = useAuthValue()
    
    const { documents: books, loading } = useFetchDocuments('book', null, user.uid)
    
    
    const [viewMenu, SetViewMenu] = useState(false)
    
    const deleteDocument = (id) => {
        
    }


  return (
    <div className={styles.favorite_section}>
        {loading && <p className='loadingBooks'></p>}
 
        {books && books.map((book) => (
            <>
                <div className={styles.book_favorite} key={book.id} id={book.id}>

                    <section>
                    <span className={styles.date}>{new Date(book.createdAt.seconds*1000).toLocaleDateString('pt-br')}</span>
                        <h3>{book.nameBook}</h3>
                       
                        <div className={styles.controls}>
                            <span onClick={() => SetViewMenu(!viewMenu?true:false)}>
                                <i className="fa-solid fa-ellipsis"></i>
                             </span>

                                {viewMenu && (
                                    <div className={styles.option}>
                                    <div onClick={() => deleteDocument()}><i class="fa-solid fa-trash"></i> <p>EXCLUIR</p></div>
                                    </div>          
                                )}       
                        </div>
    

                    </section>


                    <p>{book.text}</p>

                    <span>{book.id_book.slice(4).replace('-',':')}</span>
                </div>
            </>
             ))}
        </div>
  )
}

export default FavoriteBook