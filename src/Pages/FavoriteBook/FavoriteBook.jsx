import React from 'react'
import style from './FavoriteBook.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const FavoriteBook = () => {

    const { documents: books, loading } = useFetchDocuments('book')
    console.log(books)


  return (
    <div className={style.favorite_section}>
        {loading && <p className='loadingBooks'></p>}
        FavoriteBook

        {books && books.map((book) => (
            <>
                <div className={style.book_favorite}>
                    <p>{book.text}</p>
                    <p>{book.nameBook}</p>
                    <p>{book.id_book.replace('-',' ')}</p>
                </div>
            </>
        ))}
        </div>
  )
}

export default FavoriteBook