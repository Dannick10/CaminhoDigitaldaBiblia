import React from 'react'
import styles from './FavoriteBook.module.css'
import { useState,useRef } from 'react'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../Context/AuthContext'
import Controls from '../../components/Controls'

const FavoriteBook = () => {
    
    const { user } = useAuthValue()
    
    const { documents: books, loading } = useFetchDocuments('book', null, user.uid)

  return (
    <div className={styles.favorite_section}>
        {loading && <p className='loadingBooks'></p>}
 
        {books && books.map((book) => (
            <>
                <div className={styles.book_favorite} key={book.id} id={book.id}>

                    <section>
                    <span className={styles.date}>{new Date(book.createdAt.seconds*1000).toLocaleDateString('pt-br')}</span>
                        <h3>{book.nameBook}</h3>
                       
                        <Controls document={'book'} idcontrol={book.id}/>

                    </section>

                    <div className={styles.texts}>

                    <p>{book.text}</p>

                    <span>{book.id_book.slice(4).replace('-',':')}</span>
                    </div>
                </div>
            </>
             ))}
        </div>
  )
}

export default FavoriteBook