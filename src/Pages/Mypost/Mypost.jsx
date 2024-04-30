import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../Context/AuthContext'

import Post from '../../components/Post'

import style from './Mypost.module.css'

const Mypost = () => {
    const { user } = useAuthValue()
    const uid = user.uid

    const { documents: posts, loading} = useFetchDocuments('posts', null, uid)
    
    console.log(posts)

  return (
    <div className={style.post}>
      {loading && <div className='loadingBooks'></div>}
      {posts && posts.length == 0 && <p>Voçê ainda não tem postagens</p>}
      {posts && posts.map((post)  => ( 
        <> 
          <Post  post={post} perfil={true}/>
        </>
      ))}
    </div>
  )
}

export default Mypost