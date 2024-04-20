import React from 'react'
import style from './Blog.module.css'
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../Context/AuthContext'

const Feed = () => {

  const [text,SetText] = useState('')
  const [error,setError] = useState('')
  
  const {insertDocument, response} = useInsertDocument('posts')
  const { user } = useAuthValue()
 

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
          <i class="fa-solid fa-paper-plane"></i>
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
            <i class="fa-solid fa-share"></i>
          </button>
            )}

          {response.loading && (
          <button className={style.invisible}> 
            <i class="fa-solid fa-share"></i>
          </button>
          )}
          </div>
        </form>
      </div>
      <div className={style.post}>
        <div>Ainda não tem posts aqui</div>
        
      </div>
    </div>
  )
}

export default Feed