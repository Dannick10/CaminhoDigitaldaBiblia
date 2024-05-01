import React from 'react'
import style from './FavoriteBook.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const FavoriteBook = () => {

    const { documents: books, response } = useFetchDocuments('book')
    console.log(document)


  return (
    <div className={style.favorite_section}>
        FavoriteBook
        </div>
  )
}

export default FavoriteBook