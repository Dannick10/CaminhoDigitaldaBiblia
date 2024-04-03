import styles from './DicionarioComponent.module.css'

import { useState } from 'react'
import { useURLfetch } from '../hooks/useURLfetch'


const DicionarioComponent = ({url}) => {

const {data,loading,error} = useURLfetch(url)

  return (
    <>
        {!error && (
            <>
            {!loading && (<> 
    <div className={styles.dicionario}>
        <h2>Dicionario</h2>
          {data.map((e,i)=>(
              <>
           {e.xml && <div key={i} className={styles.text} dangerouslySetInnerHTML={{ __html: e.xml}}></div>}
            </>
          ))}
        
         
    </div>
          </>)}
          {error && <p>Error: {error.message}</p>}
      </>

        )}
    </>
  )
}

export default DicionarioComponent