import React, { useState } from 'react'
import styles from './Post.module.css'

const Post = ({post}) => {

const [date,SetData] = useState(new Date(post.createdAt.seconds*1000).toLocaleString('pt-br').split(','))
const [hour,Sethour] = useState(0)

  return (
    <div className={styles.post}>

            <div className={styles.profile}>
                <p>{post.name}</p>
            <span onMouseEnter={()=>Sethour(hour?0:1)} onMouseLeave={()=>Sethour(hour?0:1)}>{date[hour]}</span>
            </div>

            <p>{post.text}</p>

    </div>
  )
}

export default Post