import { useEffect, useState } from 'react'
import styles from './Home.module.css'

const Home = () => {

const manyChaptersBookHasRandom = [
    {nome: "Gênesis", number: 50},
    {nome: "Êxodo", number: 40},
    {nome: "Levítico", number: 27},
    {nome: "Números", number: 36},
    {nome: "Deuteronômio", number: 34},
    {nome: "Josué", number: 24},
    {nome: "Juízes", number: 21},
    {nome: "Rute", number: 4},
    {nome: "1 Samuel", number: 31},
    {nome: "2 Samuel", number: 24},
    {nome: "1 Reis", number: 22},
    {nome: "2 Reis", number: 25},
    {nome: "1 Crônicas", number: 29},
    {nome: "2 Crônicas", number: 36},
    {nome: "Esdras", number: 10},
    {nome: "Neemias", number: 13},
    {nome: "Ester", number: 10},
    {nome: "Jó", number: 42},
    {nome: "Salmos", number: 150},
    {nome: "Provérbios", number: 31},
    {nome: "Eclesiastes", number: 12},
    {nome: "Cânticos", number: 8},
    {nome: "Isaías", number: 66},
    {nome: "Jeremias", number: 52},
    {nome: "Lamentações", number: 5},
    {nome: "Ezequiel", number: 48},
    {nome: "Daniel", number: 12},
    {nome: "Oséias", number: 14},
    {nome: "Joel", number: 3},
    {nome: "Amós", number: 9},
    {nome: "Obadias", number: 1},
    {nome: "Jonas", number: 4},
    {nome: "Miquéias", number: 7},
    {nome: "Naum", number: 3},
    {nome: "Habacuque", number: 3},
    {nome: "Sofonias", number: 3},
    {nome: "Ageu", number: 2},
    {nome: "Zacarias", number: 14},
    {nome: "Malaquias", number: 4},
    {nome: "Mateus", number: 28},
    {nome: "Marcos", number: 16},
    {nome: "Lucas", number: 24},
    {nome: "João", number: 21},
    {nome: "Atos", number: 28},
    {nome: "Romanos", number: 16},
    {nome: "1 Coríntios", number: 16},
    {nome: "2 Coríntios", number: 13},
    {nome: "Gálatas", number: 6},
    {nome: "Efésios", number: 6},
    {nome: "Filipenses", number: 4},
    {nome: "Colossenses", number: 4},
    {nome: "1 Tessalonicenses", number: 5},
    {nome: "2 Tessalonicenses", number: 3},
    {nome: "1 Timóteo", number: 6},
    {nome: "2 Timóteo", number: 4},
    {nome: "Tito", number: 3},
    {nome: "Filemom", number: 1},
    {nome: "Hebreus", number: 13},
    {nome: "Tiago", number: 5},
    {nome: "1 Pedro", number: 5},
    {nome: "2 Pedro", number: 3},
    {nome: "1 João", number: 5},
    {nome: "2 João", number: 1},
    {nome: "3 João", number: 1},
    {nome: "Judas", number: 1},
    {nome: "Apocalipse", number: 22}
];

const [loading,Setloading] = useState(false)

const BookChosse = Math.floor(Math.random()*manyChaptersBookHasRandom.length)
const bookNumber = manyChaptersBookHasRandom[BookChosse].number 
const ChapterChoose = Math.floor(Math.random()*bookNumber)

const actualdayfetch = new Date().toLocaleDateString()
const lastdayfetch = localStorage.getItem('lastdayfetch')

const daytext =  localStorage.getItem('daytext')
const dayreference =  localStorage.getItem('dayreference')

  useEffect(()=>{
    if(actualdayfetch !== lastdayfetch){
        try{
        const fetchData = async () => {
            Setloading(true)

            const bookJson = await fetch(`https://bible-api.com/${manyChaptersBookHasRandom[BookChosse].nome}:${bookNumber}:${ChapterChoose+1}?translation=almeida`)
            const data = await bookJson.json()

            localStorage.setItem('daytext', data.text)
            localStorage.setItem('dayreference',data.reference)
            localStorage.setItem('lastdayfetch',new Date().toLocaleDateString())

            Setloading(false)
        }   
        fetchData()
      } catch{
        console.log('error')
      }
    }

  },[])

  const handlescroll = () =>{
    
    window.scroll({
      top: '800',
      behavior: "smooth",
    });
  }
  
  if(daytext == 'undefined' || dayreference == 'underfined'){
    localStorage.setItem('daytext', 'Disse Deus: haja luz. E houve luz.')
    localStorage.setItem('dayreference','Gênesis')
  } 

  return (
    <>
      <header className={styles.home_header}>

        <section className={styles.description}>
        <div>
          <h1>Descubra o Caminho Digital da Bíblia</h1>     
          <h2>tradição e tecnologia unidas</h2>
          <p>Descubra diariamente a sabedoria das Escrituras com nosso aleatório do dia.</p>
          <i className="fa-solid fa-circle-down" onClick={handlescroll}></i>
        </div>
        
        </section>

      </header>

      <main className={styles.mainHome}>
       <section className={styles.versHome}>
         <div className={styles.verHome_Title}>
           <h2>Versículo do Dia</h2>
         </div>
         <div className={styles.verHome_Text}>
           <p>{daytext}</p>
         </div>
         <div className={styles.verHome_SUB}>
             <span>{dayreference}</span>
           </div>
       </section>
      </main>

    </>
  )
}

export default Home