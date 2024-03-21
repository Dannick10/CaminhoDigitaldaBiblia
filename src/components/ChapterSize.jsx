import React from 'react'
import styles from './ChapterSize.module.css'

const ChapterSize = ({chaptesNumber,SetBookChapter,bookchapter}) => {


    
  const handleChapter = (chapter) =>{
    SetBookChapter(chapter)
    window.scrollTo(0,0);
  }

  const elements = Array.from({ length: chaptesNumber }, (_, index) => (
    <li key={index}>
      <button style={index + 1 == bookchapter?{background:'var(--color3)', color:'var(--color4)',transition: "1s cubic-bezier(0.165, 0.84, 0.44, 1)"}:{background:'none'}}  onClick={()=>{handleChapter(index + 1)}}>{index + 1}</button>
    </li>
  ));


  return (
    <div className={styles.numbers}>
    <ul>{elements}</ul>
    </div>
  )
}

export default ChapterSize