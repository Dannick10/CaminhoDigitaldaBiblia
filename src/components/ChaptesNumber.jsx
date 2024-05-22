import styles from './ChaptesNumber.module.css'
import { useFetchBible } from '../hooks/useFetchBible';
import { useEffect, useState } from 'react';

const ChaptesNumber = ({bookname,SetBookName,SetChapterSize,SetBookChapter,checked,setChecked}) => {

    const manyChaptersBookHas = [
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

    const {bibleJson,bookName,SetBookName:setBook,bookChapter,SetBookChapter:setbook,loading:bookLoading,chapterSize,SetChapterSize:SetSize} = useFetchBible()

    
    useEffect(() => {
        if(bookName) {
        SetBookName(bookName)
        let a = manyChaptersBookHas.find(book => book.nome === bookName);
        SetChapterSize(a.number)
       }
      },[])

    const handleClick = (e) =>{
        SetBookName(e.target.innerHTML)
        let a = manyChaptersBookHas.find(book => book.nome === e.target.innerHTML);
        SetChapterSize(a.number)
        SetBookChapter(1)
        window.scrollTo(0,0);
       setChecked(false)
    }

    const [book,SetBook] = useState('')
    const [findbook,SetfindBook] = useState()
    const [viewbook,Setviewbook] = useState(false)


    const handleBook = (e) => {
      SetBook(e.target.value)
    }

    useEffect(()=>{
      SetfindBook(manyChaptersBookHas.filter(b => b.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(book.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))))
    },[book])
    
  return (
    <nav className={styles.link}>
      <ul  style={checked ? {height: '70vh', flexWrap: 'wrap', flexDirection: 'column'}:{}}>

        <div className={styles.search}>

            <input type="text" style={!viewbook ? {width: '0em', visibility: 'hidden'}:{width: '10em'}} value={book} onChange={handleBook} className={styles.input}/>

          <i class="fa-solid fa-magnifying-glass" onClick={()=>Setviewbook(viewbook?false:true)}></i>
        </div>
        {book.length == 0 ?(<>
        {manyChaptersBookHas.map((e, i) => (
          <li key={i} className={styles.chapterlink}>
            <button onClick={handleClick} style={e.nome === bookname?{color:'var(--color1)'}:{color:'var(--color3)'}}>{e.nome}</button>
          </li>
        ))}
        </>): (<>
      {findbook.map((e,i) => (
       <li key={i} className={styles.chapterlink}>
       <button onClick={handleClick} style={e.nome === bookname?{color:'var(--color1)'}:{color:'var(--color3)'}}>{e.nome}</button>
     </li>
      ) )}
        </>)}

      </ul>
    </nav>
  )
}

export default ChaptesNumber