import React from 'react'
import style from './FavoriteBook.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../Context/AuthContext'

const FavoriteBook = () => {

    const { user } = useAuthValue()

    const { documents: books, loading } = useFetchDocuments('book', null, user.uid)

  return (
    <div className={style.favorite_section}>
        {loading && <p className='loadingBooks'></p>}
 
        {books && books.map((book) => (
            <>
                <div className={style.book_favorite}>
                    <h3>{book.nameBook}</h3>
                    <p>{book.text}</p>
                    <span>{book.id_book.slice(4).replace('-',':')}</span>
                </div>
            </>
        ))}
        </div>
  )
}

export default FavoriteBook