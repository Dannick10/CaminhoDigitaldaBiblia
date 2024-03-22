import styles from './Books.module.css'

const Books = ({bookTitle,bookText}) => {

  return (
    <main className={styles.book_section}>
        <div className="chaptes">
          
        </div>
        <section className={styles.book_title}>
            <h2>{bookTitle}</h2>
        </section>

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