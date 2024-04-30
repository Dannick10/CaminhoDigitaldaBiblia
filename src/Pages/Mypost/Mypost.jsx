import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../Context/AuthContext'

const Mypost = () => {
    const { user } = useAuthValue()
    const uid = user.uid
    
    const { documents: posts, loading} = useFetchDocuments('posts', null, uid)
    
    console.log(posts)

  return (
    <div>

    </div>
  )
}

export default Mypost