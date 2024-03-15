import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import biblebook from '/biblebook.svg'

const Home = () => {

  const handlescroll = () =>{

    window.scroll({
      top: '800',
      behavior: "smooth",
    });
  }

  return (
    <>
      <header className={styles.home_header}>

        <section className={styles.description}>
        <div>
          <h1>Descubra o Caminho Digital da Bíblia</h1>     
          <h2>tradição e tecnologia unidas</h2>
          <p>Descubra diariamente a sabedoria das Escrituras com nosso aleatório do dia.</p>
          <i class="fa-solid fa-circle-down" onClick={handlescroll}></i>
        </div>
        
        </section>

        <section className={styles.svg_header}>
            <img src={biblebook} alt="imagem da biblia" />
        </section>

      </header>

      <main className={styles.mainHome}>
       <section className={styles.versHome}>
         <div className={styles.verHome_Title}>
           <h2>versículo diario</h2>
         </div>
         <div className={styles.verHome_Text}>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora fuga officia rerum neque libero facilis perspiciatis deleniti. Vero, nostrum itaque? Necessitatibus sit, facilis porro modi voluptate sint itaque dicta.</p>
         </div>
         <div className={styles.verHome_SUB}>
             <span>GENESIS</span>
           </div>
       </section>
      </main>

    </>
  )
}

export default Home