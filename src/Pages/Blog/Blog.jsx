import React from 'react'
import style from './Blog.module.css'
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../Context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Feed = () => {

  const [text,SetText] = useState('')
  const [error,setError] = useState('')
  
  const {insertDocument, response} = useInsertDocument('posts')
  const { user } = useAuthValue()
  const { documents: posts, loading} = useFetchDocuments('posts')
  console.log(posts)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    SetText('')

    if (!text) {
      setError("Por favor, preencha todos os campos!");
    }

    if(error) return

    insertDocument({
      text,
      uid: user.uid,
      name: user.displayName
    })
   
  }

  return (
    <div className={style.blog}>
      <div className={style.text}>
        <div className={style.text_title}>
            <p> Atualize o blog</p>
          <i className="fa-solid fa-paper-plane"></i>
          <p>{user.displayName}</p>
        </div>
        <form onSubmit={handleSubmit}>

          <textarea 
          cols="30" 
          rows="10" 
          minLength={3}
          maxLength={300}
          value={text}
          onChange={(e)=>SetText(e.target.value)}
          placeholder='escreva seu post'
          ></textarea>
          <div className={style.send_text}>
            {!response.loading && (
          <button onClick={handleSubmit}> 
            <i className="fa-solid fa-share"></i>
          </button>
            )}

          {response.loading && (
          <button className={style.invisible}> 
            <i className="fa-solid fa-share"></i>
          </button>
          )}
          </div>
        </form>
      </div>
      <div className={style.post}>
          {loading && (<dov></dov>)}
      </div>
    </div>
  )
}

export default Feed