import React, { useEffect, useState } from 'react'
import styles from './Post.module.css'
import IconProfile from './iconProfile'

import { useInsertDocument } from '../hooks/useInsertDocument'
import { useFetchDocuments } from '../hooks/useFetchDocuments'
import { useDeletedDocument } from '../hooks/useDeleteDocument'

import { useAuthValue } from '../Context/AuthContext'

import Controls from './Controls'

const Post = ({post,perfil}) => {

  const { insertDocument, response } = useInsertDocument('comments')
  const { documents: commentsUser, loading } = useFetchDocuments('comments')
  

  const { user } = useAuthValue()

  const [date,SetData] = useState(new Date(post.createdAt.seconds*1000).toLocaleString('pt-br').split(','))
  const [hour,Sethour] = useState(0)

  useEffect(()=> {
    SetData(new Date(post.createdAt.seconds*1000).toLocaleString('pt-br').split(','))

  },[insertDocument])


  const [comment,SetComment] = useState('')
  const [error,Seterror] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    Seterror('')
    SetComment('')
    
    if(!comment){
      Seterror('Preenche o campo')
    }
    
    if(error)return
    
    insertDocument({
      comment,
      uid: user.uid,
      name: user.displayName,
      post: post.id,
    })

  }



  return (
    <>
   <div className={styles.post_container}>  
     <div className={styles.post} key={post.id}>
             <div className={styles.profile}>

              <div>
                  <IconProfile icon={user.displayName} size={1.8}/>     
                 <div className={styles.name}>
              </div>

                   <div>
                     <p>{post.name}</p>
                     <span onMouseEnter={()=>Sethour(hour?0:1)} onMouseLeave={()=>Sethour(hour?0:1)}>{date[hour]}</span>
                   </div>
               </div>
              {user.uid == post.uid && (<>
              <div className={styles.controls}>
              <Controls document={'posts'} idcontrol={post.id} />
              </div>
              </>)}

             </div>

             <div className={styles.post_text}>
               <p>{post.text}</p>
             </div>


         </div>

             <div className={styles.interact}>
         {!perfil && (<>
              <ul>
               <li>
               <i className="fa-regular fa-heart"></i>
                 Like
                 </li>
               <li>
               <i className="fa-solid fa-share"></i>
                 Compartilhar
                 </li>
     
              </ul>
     
              <div className={styles.comment}>
                <IconProfile icon={user.displayName} size={1}/>
            <form onSubmit={handleSubmit} className={styles.form}>
               <input type="text"
               placeholder='Comente...'
               value={comment}
               onChange={(e)=>SetComment(e.target.value)}/>
               <input type="submit" value="➤" />
            </form>

             </div>
               </>)}
              {loading && (<div className='loadingBooks'></div>)}
          
               {commentsUser && (
                commentsUser.map((c,i)=>(
                  <>
                    {c.post == post.id && (<>
                      <div className={styles.comments} key={i}>
                    <div className={styles.profile_comments}>
                    </div>
                      <div className={styles.comment_aside}>    
                        <p>{c.name}</p>
                          <div className={styles.text_comment}>
                        <p>{c.comment}</p>
                        </div>
                      </div>

                      </div>
                    </>)}
                  </>
                ))
               )}

              </div>
   </div>
    </>
  )
}

export default Post