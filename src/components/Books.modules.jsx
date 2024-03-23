import styles from './Books.module.css'
import { useState } from 'react'

const Books = ({bookTitle,bookText}) => {

  const [audioMenu,SetAudioMenu] = useState(false)
  const [playAudio,SetPlayAudio] = useState(false)
  const synth = window.speechSynthesis
  
  const handleMenu = () => {
     audioMenu?SetAudioMenu(false):SetAudioMenu(true)
     SetPlayAudio(false)
     if(audioMenu){
      handleCancel()
     } else {
      handleVoice()
     }
  }
  
  const handlePlay = () => {
    playAudio?SetPlayAudio(false):SetPlayAudio(true)
  }

  const handleCancel = () => {
    SetAudioMenu(false)
    SetPlayAudio(true)
    synth.cancel()
  }

  const handleVoice = () => {
    let voices = synth.getVoices()
    if(voices.length !== 0) {
      let textBible = bookText.map((e)=>e.text)
      let msg = new SpeechSynthesisUtterance()
      msg.voice = voices[0] 
      msg.rate = 1
      msg.pitch = 1
      msg.text = textBible
      msg.lang = 'pt-BR'
      synth.speak(msg)
    }
  }

  return (
    <main className={styles.book_section}>
        <div className="chaptes">
          
        </div>
        <section className={styles.book_title}>
            <div>
              <h2>{bookTitle}</h2>
            </div>
            <div>
              {!bookTitle == '' && (<>
              <i className="fa-solid fa-microphone" onClick={handleMenu}></i>
              </>)}
            </div>
        </section>

        {!bookTitle == '' && (<>
          {audioMenu && (

            <div className={styles.audiocontrol}>

            <div className={styles.play}>

              {playAudio?(<>
              <i className="fa-solid fa-play" onClick={()=>{handlePlay(),synth.resume()}}></i>
              </>):(<>
              <i className="fa-solid fa-pause" onClick={()=>{handlePlay(),synth.pause()}}></i>
              </>)}

            </div>

            <div className={styles.cancel}>
             <i className="fa-solid fa-stop" onClick={handleCancel}></i>
            </div>

        </div>
          )}
        </>)}

        <aside className={styles.book_read} id='read'>

          {bookText?bookText.map((e,o)=>(
            <div className={styles.book_read}>
              <div className={styles.verse}></div>
              <div key={o} className={styles.text}><span>{e.verse}.</span> {e.text}</div>

            </div>
          ))
          :<div className={styles.choose}><h1>Escolha um livro e deixe a Palavra iluminar o seu dia.</h1></div>}
            

          </aside>
   

    </main>
  )
}

export default Books