import React from 'react'
import style from './Blog.module.css'
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthentication } from '../../hooks/useAuthentication'

const Blog = () => {

  const [text,SetText] = useState('')
  const [error,setError] = useState('')
  
  const {InsertDocument, response } = useInsertDocument('POST') 
  const { user } = useAuthentication()
 
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    console.log(text)
    SetText('')

    InsertDocument({
      text,
   
    })
   
  }

  return (
    <div className={style.blog}>
      <div className={style.text}>
        <div className={style.text_title}>
          <i class="fa-solid fa-paper-plane"></i>
            <p> Atualize o blog</p>
        </div>
        <form onSubmit={handleSubmit}>

          <textarea 
          cols="30" 
          rows="10" 
          maxLength={300}
          value={text}
          onChange={(e)=>SetText(e.target.value)}
          ></textarea>
          <div className={style.send_text}>
          <button onClick={handleSubmit}> 
            <i class="fa-solid fa-share"></i>
          </button>
          </div>
        </form>
      </div>
      <div className={style.post}>
        <div>Ainda não tem posts aqui</div>
        
      </div>
    </div>
  )
}

export default Blog