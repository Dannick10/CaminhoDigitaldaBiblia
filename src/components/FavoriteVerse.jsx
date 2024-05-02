import React from 'react'

import { useFetchDocuments } from '../hooks/useFetchDocuments'
import { useAuthValue } from '../Context/AuthContext'

const FavoriteVerse = ({id}) => {

    const { user } = useAuthValue()

    const { documents: booksFetch, loading } = useFetchDocuments('book', null, user.uid)
    
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