import React from 'react'

import { useFetchDocuments } from '../hooks/useFetchDocuments'

const FavoriteVerse = ({id}) => {

    const { documents: booksFetch, loading } = useFetchDocuments('book')
    
    return (
    <div>

      {loading && <p>Carregando...</p>}
        {booksFetch && booksFetch.map((e) => {
            if(e.id_book == id){ return (
                <>
               <span><i className="fa-solid fa-heart"></i></span>
                </>
            )} 

})}
    
    </div>
  )

}

export default FavoriteVerse