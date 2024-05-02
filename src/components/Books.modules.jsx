import styles from './Books.module.css'
import { useState, useRef, useEffect } from 'react'

import DicionarioComponent from './DicionarioComponent'
import FavoriteVerse from './FavoriteVerse'

import { useInsertDocument } from '../hooks/useInsertDocument'

import { useAuthValue } from '../Context/AuthContext'

const Books = ({bookTitle,bookText}) => {

  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument('book', null, user.uid)

  const [visibility,SetVisibility] = useState(true)
  const [dicionarioView,SetdicionarioView] = useState(false)

  const [velAudio, SetVelAudio] = useState(1)
  const [audioMenu,SetAudioMenu] = useState(false)
  const [playAudio,SetPlayAudio] = useState(false)
  const synth = window.speechSynthesis
  
    const handleMenu = () => {
      audioMenu?SetAudioMenu(false):SetAudioMenu(true)
      SetPlayAudio(false)
     if(audioMenu){
      handleCancel()
      handleEraseVerse()
    } else {
      handleVoice()
     }
  }

  const handleVel = () => {
  SetVelAudio(velAudio + .5)
  if(velAudio >= 2){SetVelAudio(1)}
  }
  
  const handlePlay = () => {
    playAudio?SetPlayAudio(false):SetPlayAudio(true)
  }

  
  const handleCancel = () => {
    SetAudioMenu(false)
    SetPlayAudio(true)
    synth.cancel()
  }
  
  let msg = new SpeechSynthesisUtterance()
  
  const handleVoice = () => {
    let textBible = bookText.map((e)=>e.text.split(' '))
    let voices = synth.getVoices()
    if(voices.length !== 0) {
      msg.voice = voices.find((v)=> v.lang == 'pt-BR')
      msg.rate = velAudio
      msg.pitch = 1
      msg.text = textBible
      msg.lang = 'pt-BR'
      synth.speak(msg)
    }
  
  }

  const [dicionarioSearch,SetdicionarioSearch] = useState('')
  const URL_dicionario = `https://api.dicionario-aberto.net/word/${dicionarioSearch}`
  const handleDicionario = (e) => {
    SetdicionarioView(true)
    let word = e.toLowerCase()
    let regexWord = word.replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "")
      SetdicionarioSearch(regexWord)
  }

  const handleSaveBook = (id) => {
    if(!user) {return}
 let getText = Array.from(id.target.parentNode.textContent)
let filterTextSave = getText.filter((e)=>e != e.replace(/[^\d/.]+/g,'')).join('')
let saveBookTitle = bookTitle.split(' ')
let id_book = id.target.parentNode.id
console.log(id)

insertDocument({
  text: filterTextSave,
  nameBook: saveBookTitle[0],
  chapterBook: saveBookTitle[1],
  uid: user.uid,
  id_book: id_book
})

}


  return (
    <main className={styles.book_section}>
        <div className="chaptes">
          
        </div>
        <section className={styles.book_title}>
            <div>
              <h2>{bookTitle}</h2>
            </div>

                {!bookTitle == '' && (<>
              <div className={styles.acessibility} style={!visibility?{right:'-3em'}:{right:'.2em'}}> 

              <div className={styles.menuAcess}>
              
              {visibility && <>
                <span> 
                <i className="fa-solid fa-chevron-right" onClick={()=>SetVisibility(false)}></i>
                  </span>
              </>}
              {!visibility && <>
                <span>
                <i className="fa-solid fa-chevron-left" onClick={()=>SetVisibility(true)}></i>
                  </span>
              </>}

              </div>

            <div className={styles.audioPlay}>

                <span className={styles.button_acces}>
                  <i className="fa-solid fa-microphone" onClick={handleMenu}></i></span>
              </div>

                 <span className={styles.button_acces} onClick={()=>{dicionarioView?SetdicionarioView(false):SetdicionarioView(true)}}>
                <i className="fa-solid fa-book-open">
                  </i></span>
                
              </div>
                   </>)}
                            

        </section>

        {!bookTitle == '' && (<>
         
          {audioMenu && (

            <div className={styles.audiocontrol}>

            <div className={styles.play}>

              {playAudio?(<>
              <i className="fa-solid fa-play" onClick={()=>{handlePlay(),synth.resume()}} style={{color:'#009920'}}></i>
              </>):(<>
              <i className="fa-solid fa-pause" onClick={()=>{handlePlay(),synth.pause()}}  style={{color:'rgb(255, 85, 33)'}}></i>
              </>)}

            </div>

            <div className={styles.cancel}>
             <i className="fa-solid fa-stop" onClick={handleCancel}></i>
            </div>

            <div className={styles.speed}  onClick={handleVel}>
                <span>{velAudio}</span>
            </div>

        </div>
          )}
        </>)}

        <aside className={styles.book_read} id='read'>

          {bookText?bookText.map((e,o)=>(
            <div className={styles.book_read} key={o} id={`${e.book_id}-${e.chapter}-${e.verse}`}  onDoubleClick={(a)=>handleSaveBook(a)}>
              <div className={styles.verse}></div>
                <div key={o} className={styles.text}>
                <span className={styles.heart}>
          {user && (<>
                <FavoriteVerse id={`${e.book_id}-${e.chapter}-${e.verse}`}/>
          </>)}
                </span>

                  <span className={styles.versesDetail}>{e.verse}.</span>
                    <span> {e.text.split(' ').map ((e)=>(<span onClick={(e)=>{handleDicionario(e.target.textContent)}} className={styles.letters}>{e} </span>))}</span></div>
            </div>
          ))
          :<div className={styles.choose}><h1>Escolha um livro e deixe a Palavra iluminar o seu dia.</h1></div>}
          </aside>
            
            {dicionarioView && <>
          {bookText && <>
         <DicionarioComponent url={URL_dicionario}/>   
          </>}
            </>}

    </main>
  )
}

export default Books