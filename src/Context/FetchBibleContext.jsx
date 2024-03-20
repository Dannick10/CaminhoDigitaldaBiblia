import { createContext, useState, useEffect } from "react";

export const FetchBibleContext = createContext()

export const FetchBibleContextProvider = ({children}) => {

    const [bibleJson,SetBibleJson] = useState([])

    const [bookName,SetBookName] = useState('')
    const [bookChapter,SetBookChapter] = useState('1')
    const [translation,SetTranslation] = useState('almeida')
    const [loading,Setloading] = useState(false)
  
    const [chapterSize,SetChapterSize] = useState()
  
    
    useEffect(()=>{
  
      try{
  
      const fetchData = async () => {
      Setloading(true)
      const bookJson = await fetch(`https://bible-api.com/${bookName}:${bookChapter}?translation=${translation}`)
      const data = await bookJson.json()
  
  
  
      SetBibleJson(data)
        Setloading(false)
      }
      
      fetchData()
    } catch{
      console.log('error')
    }
  
    },[bookName, bookChapter])

    return (
        <FetchBibleContext.Provider value={{bibleJson,bookName,SetBookName,bookChapter,SetBookChapter,translation,loading,chapterSize,SetChapterSize}}>
            {children}
        </FetchBibleContext.Provider>
    )

}