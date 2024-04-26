import React, { useState } from 'react'
import styles from './Post.module.css'
import IconProfile from './iconProfile'

import { useAuthValue } from '../Context/AuthContext'

const Post = ({post}) => {
  console.log(post)
  const { user } = useAuthValue()

  const [date,SetData] = useState(new Date(post.createdAt.seconds*1000).toLocaleString('pt-br').split(','))
  const [hour,Sethour] = useState(0)


  return (
    <>
   <div className={styles.post_container}>  
     <div className={styles.post}>
             <div className={styles.profile}>
               <div className={styles.name}>
                 <IconProfile  icon={post.name} size={1.8}/>
                   <div>
                     <p>{post.name}</p>
                     <span onMouseEnter={()=>Sethour(hour?0:1)} onMouseLeave={()=>Sethour(hour?0:1)}>{date[hour]}</span>
                   </div>
               </div>
               ...
             </div>

             <div className={styles.post_text}>
               <p>{post.text}</p>
             </div>


         </div>
             <div className={styles.interact}>
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
               <input type="text" placeholder='Comente...'/>
              </div>
             </div>
   </div>
    </>
  )
}

export default Post