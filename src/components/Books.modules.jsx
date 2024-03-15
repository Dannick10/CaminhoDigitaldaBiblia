import { useState } from 'react'
import styles from './Books.module.css'

const Books = ({bookTitle,bookText}) => {

  const text = [bookText]

  const manyChaptersBookHas = {"Gênesis":50, "Êxodo":40, "Levítico":27, "Números":36, "Deuteronômio":34, "Josué":24, "Juízes":21, "Rute":4, "1 Samuel":31, "2 Samuel":24, "1 Reis":22, "2 Reis":25, "1 Crônicas":29, "2 Crônicas":36, "Esdras":10, "Neemias":13, "Ester":10, "Jó":42, "Salmos":150, "Provérbios":31, "Eclesiastes":12, "Cânticos":8, "Isaías":66, "Jeremias":52, "Lamentações":5, "Ezequiel":48, "Daniel":12, "Oséias":14, "Joel":3, "Amós":9, "Obadias":1, "Jonas":4, "Miquéias":7, "Naum":3, "Habacuque":3, "Sofonias":3, "Ageu":2, "Zacarias":14, "Malaquias":4, "Mateus":28, "Marcos":16, "Lucas":24, "João":21, "Atos":28, "Romanos":16, "1 Coríntios":16, "2 Coríntios":13, "Gálatas":6, "Efésios":6, "Filipenses":4, "Colossenses":4, "1 Tessalonicenses":5, "2 Tessalonicenses":3, "1 Timóteo":6, "2 Timóteo":4, "Tito":3, "Filemom":1, "Hebreus":13, "Tiago":5, "1 Pedro":5, "2 Pedro":3, "1 João":5, "2 João":1, "3 João":1, "Judas":1, "Apocalipse":22}

  return (
    <main className={styles.book_section}>
        <div className="chaptes">
          
        </div>
        <section className={styles.book_title}>
            <h2>{bookTitle}</h2>
        </section>

        <aside className={styles.book_read} id='read'>

          {bookText?bookText.map((e)=>(
            <div className={styles.book_read}>
              <div className={styles.verse}></div>
              <div className={styles.text}><span>{e.verse}.</span> {e.text}</div>

            </div>
          ))
          :<div className={styles.choose}><h1>Escolha um livro e deixe a Palavra iluminar o seu dia.</h1></div>}
            

          </aside>
   

    </main>
  )
}

export default Books